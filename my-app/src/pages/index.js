import React from "react"
import "./index.css"
import Navbar from "../Components/Navbar"
import RestaurantList from "../Components/InfoDisplay/display"
import MapContainer from "../Components/MapElement/map"

const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
        <div className="index-title">Allergenics</div>
        <MapContainer lat={40.744781} lng={-74.025789} />
        <RestaurantList />
      </div>
    </div>
  )
}

export default Home
