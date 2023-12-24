import React, { useState } from "react"
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
  print("Item", item)
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
  const [menuData, setData] = React.useState(null)

  let googleID = restaurant.place_id;

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
        <ul className="breakout-menu-item-container">
          {!menuData ? <div>Loading...</div> : (menuData.map(GenMenu(googleID)))}
        </ul>
        
      </div>
    </div>
  )
}

export default RestaurantDetails;
