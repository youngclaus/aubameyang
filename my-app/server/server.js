/*
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
*/

const express = require('express');
const cheerio = require('cheerio');
const axios = require('axios');

const PORT = process.env.PORT || 3001;
const app = express();

const { write } = require(__dirname + '/datamanager');
const { testAllergen } = require(__dirname + "/allergentest");


const fs = require('fs');



app.get('/test/:id', (req, res) => {
  const url = 'https://www.yelp.com/menu/' + req.params.id;
  
  fileName = url.substring(url.lastIndexOf('/') + 1);
  
  axios.get(url)
    .then(response => {
      const html = response.data;
      const $ = cheerio.load(html);
      let restaurants = [];
      
      $('.menu-sections > .u-space-b3 > div').each((i, element) => {
        let name = $(element).find('h4').prop("innerText");
        let desc = $(element).find('.menu-item-details-description').prop("innerText");
        let price = $(element).find('.menu-item-price-amount').prop("innerText");
        name = name.replace(/\n\s*/g, '\n').replace(/\n/g, '');
        price = price.replace(/\n\s*/g, '\n').replace(/\n/g, '');
        restaurants.push({
          name: name,
          desc: desc,
          price: price,
          warning: []
        });
      });
    
      let array = testAllergen(restaurants);
      console.log(array.length)
      res.json(array);
      write(fileName, array);
    })
    .catch(error => {
      console.log(error);
      res.status(500).send('Error retrieving restaurants');
    });
});

app.get('/retest/:id', (req, res) => {
  const url = 'https://www.yelp.com/menu/' + req.params.id;
  fileName = url.substring(url.lastIndexOf('/') + 1);

  try {
    let data = require(__dirname + `/data/${req.params.id}.json`);
    let array = testAllergen(data);
    console.log(`Retesting ${fileName}`);
    res.json(array);
    write(fileName, array);
  }
  catch(err) {
    res.json("file not found")
  }

  
});

//returns the restaurant data. if file for given restaurant id is not found data it is fetched with function above.
app.get('/restaurants/:GID', (req, res) => {
  let data;
  let list = require(__dirname + `/data/dev/hoboken.json`)
  let id = "";
  let gooID = req.params.GID;
  for (i in list) {
    (list[i].googleID == gooID) ? id = list[i].yelpID : null;
  }
  data = require(__dirname+`/data/${id}.json`)
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  
});
module.exports = app;
