import React from "react"
import MapContainer from "../Components/MapElement/map"
import RestaurantList from "../Components/InfoDisplay/display"
import Navbar from "../Components/Navbar"

const Directory = () => {
  return (
    <div style={{ backgroundColor: "#20bfd0" }}>
      <div className="navbar">
        <Navbar />
      </div>
      <MapContainer lat={40.744781} lng={-74.025789} />
      <RestaurantList />
    </div>
  )
}

export default Directory
