import React, { useState } from "react"
import "./display.css"
import addressIcon from "./logos/address-card-regular.svg"
import settingsIcon from "./logos/sliders-solid.svg"
import RestaurantDetails from "./info"

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
    <>
      <div className='box-container'>
        <div className='box-title-container'>
          <div className="box-title">Allergenics</div>
        </div>
        <div className="box-icons">
          <div>
            <img className="icon" src={addressIcon} alt="logo" />
            <h2>About Us</h2>
          </div>
          <div>
            <img className="icon" src={settingsIcon} alt="logo" />
            <h2>User Settings</h2>
          </div>
        </div>
        <hr />
        <div className='info-tabs-container'>
          <h1>Find Your Restaurant</h1>
          <div className="tab-list-container">
          <ul>
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
          </div>
        {selectedRestaurant && (
          <RestaurantDetails
            restaurant={selectedRestaurant}
            onBackClick={handleBackClick}
          />
        )}
        </div>
      </div>
    </>
  )
}

export default RestaurantList;