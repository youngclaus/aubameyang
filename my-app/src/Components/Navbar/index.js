import React, { useState } from "react"
import "./index.css"
import { NavLink, NavMenuLeft, NavMenuRight } from "./Elements"
import logo from "./logoIteration2.png"

const Navbar = () => {
  const [isCollapsed, setCollapsed] = useState(false)
  const handleCollapse = () => {
    setCollapsed(!isCollapsed)
  }

  return (
    <div className={`navbar-container ${isCollapsed ? "collapsed" : ""}`}>
      <div className="navbar-left-tabs">
        <NavMenuLeft>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle>
            About Us
          </NavLink>
        </NavMenuLeft>
      </div>
      <div className="navbar-logo-container">
        <img className="navbar-logo" src={logo} alt="logo" />
      </div>
      <div className="navbar-right-tabs">
        <NavMenuRight>
          <NavLink to="/directory" activeStyle>
            Map
          </NavLink>
          <NavLink to="/settings" activeStyle>
            Settings
          </NavLink>
        </NavMenuRight>
      </div>
      <div className="button-container">
        <button onClick={handleCollapse}>^</button>
      </div>
    </div>
  )
}

export default Navbar
