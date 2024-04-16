const axios = require('axios');
const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();

app.listen(PORT, () => {
  console.log('Server running on port 3001')
})

const YELP_API_KEY = process.env.YELP_API_KEY;
const YELP_BASE_URL = 'https://api.yelp.com/v3';

app.get('/api/restaurants/:id', async (req, res) => {
  const { id } = req.params;
  const url = `${YELP_BASE_URL}/businesses/${id}`;
  print(id);

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });
    res.json(response.data);
  } catch (e) {
    console.error('Failed to fetch data from Yelp API: ', e);
    res.status(500).send('Failed to fetch data from Yelp API');
  }
});
