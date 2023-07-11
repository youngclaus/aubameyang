import React, { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../img/logoIteration2.png"
import "./index.css"

const Home = () => {
  const [isHotspot, setHotspot] = useState(false)
  const handleHotspot = () => {
    setHotspot(true)
    setTimeout(() => {
      window.location.href = "Directory"
    }, 1000)
  }
  return (
    <div>
      <div className="app-background" />
      <div className="app-logo-container">
        <img className="app-logo" src={logo} alt="logo" />
        <div
          className={`hotspot-container ${isHotspot ? "zoomed" : ""}`}
          onClick={handleHotspot}
        >
          <Link to="/Directory" className="hotspot-link" />
        </div>
      </div>
      <p className="app-title">click to enter!</p>
    </div>
  )
}

export default Home
