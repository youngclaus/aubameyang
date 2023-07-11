import React, { useState } from "react"
import "./index.css"
import { Nav, NavLink, NavMenu } from "./Elements"
import logo from "./logoIteration2.png"

const Navbar = () => {
  const [isCollapsed, setCollapsed] = useState(false)
  const handleCollapse = () => {
    setCollapsed(!isCollapsed)
  }

  return (
    <div>
      <div className={`navbar-container ${isCollapsed ? "collapsed" : ""}`}>
        <Nav id="navbar">
          <div className="navbar-left-tabs">
            <NavMenu>
              <NavLink to="/" activeStyle>
                Home
              </NavLink>
              <NavLink to="/about" activeStyle>
                About Us
              </NavLink>
            </NavMenu>
          </div>
          <div className="navbar-logo-container">
            <img className="navbar-logo" src={logo} alt="logo" />
          </div>
          <div className="navbar-right-tabs">
            <NavMenu>
              <NavLink to="/directory" activeStyle>
                Map
              </NavLink>
              <NavLink to="/settings" activeStyle>
                Settings
              </NavLink>
            </NavMenu>
          </div>
          <div className="button-container">
            <button onClick={handleCollapse}>^</button>
          </div>
        </Nav>
      </div>
    </div>
  )
}

export default Navbar
