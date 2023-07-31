import React, { useState } from "react"
import "./index.css"
import RestaurantList from "../Components/InfoDisplay/display"
import MapContainer from "../Components/MapElement/map"

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const handleToggleCard = (index) => {
    if (selectedRestaurant && selectedRestaurant === restaurants[index]) {
      setSelectedRestaurant(null);
    } else {
      setSelectedRestaurant(restaurants[index]);
    }
  };

  const handleBackClick = () => {
    setSelectedRestaurant(null);
  };

  const handleRestaurantsUpdate = (restaurants) => {
    setRestaurants(restaurants);
  };

  return (
    <div>
        <MapContainer
          lat={40.744781}
          lng={-74.025789}
          restaurants={restaurants}
          onRestaurantsUpdate={handleRestaurantsUpdate}
          selectedRestaurant={selectedRestaurant}
          toggleCard={handleToggleCard}
        />
        <RestaurantList
          restaurants={restaurants}
          selectedRestaurant={selectedRestaurant}
          setSelectedRestaurant={setSelectedRestaurant}
          toggleCard={handleToggleCard}
          onBackClick={handleBackClick}
        />
      </div>
  )
}

export default Home
