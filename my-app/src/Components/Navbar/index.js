import React from "react";
import "./index.css";
import { Nav, NavLink, NavMenu } from "./Elements";

const Navbar = () => {
    return (
        <div>
            <p className="app-title"> Allergenics </p>
            <div className="navigation">
                <Nav id="nav-bar">
                    <NavMenu className="tabs">
                        <NavLink to="/" activeStyle>
                            Home
                        </NavLink>
                        <NavLink to="/about" activeStyle>
                            About Us
                        </NavLink>
                        <NavLink to="/directory" activeStyle>
                            Map
                        </NavLink>
                        <NavLink to="/settings" activeStyle>
                        Settings
                        </NavLink>
                    </NavMenu>
                </Nav>
            </div>
        </div>
    );
};

export default Navbar;