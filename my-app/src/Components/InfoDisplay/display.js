import React, { useState } from "react"
import "./display.css"
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
  return (
    <li className={`breakout-menu-item${severity}`} key={i} id={severity}>
      <h4>{item.name}</h4>
      {item.price !== "" ? <p className="breakout-menu-item-price">{item.price}</p> : null}
      {item.warning.length > 0 ? <p>contains: {warningString}</p> : null}
      {item.desc !== "" ? <p>{item.desc}</p> : null}
    </li>
  )
}

function RestaurantDetails({ restaurant, onBackClick }) {
  const [menuData, setData] = React.useState(null)

  let googleID = restaurant.place_id //static for testing

  React.useEffect(() => {
    googleID = restaurant.place_id
    fetch(`/restaurants/${googleID}`)
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])

  return (
    <div className='breakout-container'>
      <div className='breakout-menu-header'>
        <h3>{restaurant.name}</h3>
        <div className="exit" onClick={onBackClick}>
          Exit
        </div>
      </div>
      <div className='breakout-menu-container'>
        
          <p>Address</p>
          <div>{restaurant.vicinity}</div>
          <p>Rating - {restaurant.rating}</p>
          <p>Menu Items{/*restaurant.place_id*/}</p>
          <ul className="breakout-menu-item-container">
            {!menuData ? <div>Loading...</div> : menuData.map(GenMenu)}
          </ul>
        
      </div>
    </div>
  )
}

const RestaurantList = ({ restaurants }) => {
  const [openCardIndex, setOpenCardIndex] = useState(-1)
  const [selectedRestaurant, setSelectedRestaurant] = useState(null)

  const toggleCard = async (index) => {
    if (openCardIndex === index) {
      setOpenCardIndex(-1)
      setSelectedRestaurant(null)
    } else {
      setOpenCardIndex(index)
      setSelectedRestaurant(restaurants[index])
    }
  }

  const handleBackClick = () => {
    setOpenCardIndex(-1)
    setSelectedRestaurant(null)
  }

  return (
    <div className='box-container'>
      <h2 className="box-title">Allergenics</h2>
      <ul className="tab-list-container">
        {restaurants &&
          restaurants.map((restaurant, index) => (
            <div key={index} className="tab" onClick={() => toggleCard(index)}>
              <h3 className="tab-name">{restaurant.name}</h3>
              {openCardIndex === index && (
                <div
                  className="tab-dropdown"
                  style={{ color: "#8776ff" }}
                  onClick={() => setSelectedRestaurant(restaurant)}
                />
              )}
            </div>
          ))}
      </ul>
    {selectedRestaurant && (
      <RestaurantDetails
        restaurant={selectedRestaurant}
        onBackClick={handleBackClick}
      />
    )}
    </div>
  )
}

export default RestaurantList;