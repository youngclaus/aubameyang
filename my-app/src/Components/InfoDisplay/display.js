import React, { useState } from "react"
import "./display.css"
import addressIcon from "./logos/address-card-regular.svg"
import settingsIcon from "./logos/sliders-solid.svg"
import RestaurantDetails from "./info"

const RestaurantList = ({ restaurants, selectedRestaurant, setSelectedRestaurant, toggleCard, onBackClick }) => {
  const [openCardIndex, setOpenCardIndex] = useState(-1);
  console.log(restaurants);
  return (
    <>
      <div className='box-container'>
        <div className='box-title-container'>
          <div className="box-title">Allergenics</div>
        </div>
        <div className="box-icons-container">
          <div className="box-icons">
            <a href="/about">
              <img className="icon" src={addressIcon} alt="logo" />
              <h2 className="icon_text">About Us</h2>
            </a>
          </div>
          <div className="box-icons">
            <a href="/settings">
              <img className="icon" src={settingsIcon} alt="logo" />
              <h2 className="icon_text">Settings</h2>
            </a>
          </div>
        </div>
        <h1>Find Your Restaurant</h1>
        <div className='info-tabs-container'>
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
        </div>
        {selectedRestaurant && (
          <RestaurantDetails restaurant={selectedRestaurant} onBackClick={onBackClick} />

        )}
      </div>
    </>
  )
}

export default RestaurantList;
