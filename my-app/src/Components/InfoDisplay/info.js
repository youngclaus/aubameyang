import React, { useState, useEffect } from "react"
import axios from 'axios';
import "./info.css"
import Cookies from "universal-cookie"

const cookies = new Cookies();

const GenMenu = (item, i) => {
  let warningString = ""
  let severity = 0
  let testAllergen = ""
  item.warning.map((x, i) => {
    i === 0 ? (warningString = x) : (warningString = warningString + ", " + x)
    testAllergen = x.charAt(0).toUpperCase() + x.substring(1)
    if (
      cookies.get(`${testAllergen}`) &&
      cookies.get(`${testAllergen}Value`) > severity
    ) {
      severity = cookies.get(`${testAllergen}Value`)
    }
  })
  //print("Item", item)
  return (
    <li className={`breakout-menu-item${severity}`} key={i} id={severity}>
      <h4>{item.name}</h4>
      {item.price !== "" ? <p className="breakout-menu-item-price">{item.price}</p> : null}
      {item.warning.length > 0 ? <p>contains: {warningString}</p> : null}
      {item.desc !== "" ? <p>{item.desc}</p> : null}
    </li>
  )
};

function RestaurantDetails({ restaurant, onBackClick }) {
  const [menuData, setMenuData] = React.useState(restaurant.menu || []);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/restaurants/${restaurant.yelpId}`);
        setMenuData(response.data);
      } catch (e) {
        console.error('Failed to fetch menu data: ', e);
        setMenuData([]);
      }
    };

    if (restaurant.yelpid) {
      fetchMenu();
    }
  }, [restaurant.yelpId]);

  return (
    <div className='breakout-container'>
      <div className='breakout-menu-header'>
        <h3 className='title'>{restaurant.name}</h3>
        <div className="exit" onClick={onBackClick}>
          Exit
        </div>
      </div>
      <div className='breakout-menu-container'>
        <div className="smalltext">{restaurant.vicinity}</div>
        <div className="smalltext">Rating: {restaurant.rating}</div>
        <div className="smalltext">{restaurant.place_id}</div>
        <p>Menu Items</p>
        <div className='breakout-menu-container'>
        {menuData.length > 0 ? (
          <ul className="breakout-menu-item-container">
            {menuData.map((item, index) => (
              <li key={index}>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                <p>${item.price}</p>
              </li>
            ))}
          </ul>
        ) : <p>No menu information available.</p>}
        </div>
      </div>
    </div>
  )
}

export default RestaurantDetails;
