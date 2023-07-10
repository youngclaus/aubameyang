import React from "react";
import "./about.css";
import logo from "../img/logoIteration2.png";

const AboutUs = () => {
  return (
    <div className="about-container">
        <div className="title-container">
            <h1 className="about-title">About Us</h1>
            <img src={logo} alt="logo" className="logo"/>
        </div>
        <div>
            <a
            className="app-link"
            href="https://sites.google.com/stevens.edu/allergenics/home"
            target="_blank"
            rel="noopener noreferrer"
            >
            Track our progress!
            </a>
        </div>
        <div className="info-container">
            <div className="line"/>
                <div>
                    <h2 className="sub-title">Who Are We?</h2>
                    <p className="about-description">
                        This project was pioneered with consumers' health in mind. Unfortunately, a cure for allergies has eluded
                        the medical science community up until this point. Dietary restrictions are an almost permanent facet of
                        modern society, and the spectrum spans wide from glucose intolerance to religious restrictions. While we 
                        have not found a cure ourselves, we have engineered an alternative solution to keep consumers safe called, "Allergenics".
                    </p>
                </div>
                <div>
                    <h2 className="sub-title">Problem</h2>
                    <p className="about-description">
                        There does not exist a product that will alert consumers they are entering or are near a restaurant that serves food they are 
                        allergic to. Information on ingredients is not always readily available online. Some restaurants only contain food warnings 
                        inside the store, while others will only inform a customer if they ask. By looking at menu items and providing users with a 
                        detailed analysis of possible allergens, the team provides safety and peace of mind to users, giving them a better experience 
                        when dining or eating out. 
                    </p>
                </div>
                <div>
                    <h2 className="sub-title">Solution</h2>
                    <p className="about-description">
                        Our website/app development project is meant to allow users to identify restaurants near them, click a button to expand their menu, 
                        and clearly see dishes that may contain potentially harmful ingredients compared to what the user tells us they cannot ingest.
                        Allergenics provides quick, on-the-fly allergy information about local restaurants. The competitive advantage of the product 
                        is the detailed, easy to access, information regarding potential allergens or other ingredients provided to the user. 
                        This information can be accessed through a website or mobile application interface which allows the team to reach a larger audience.
                    </p>
                </div>
                <div>
                    <h2 className="sub-title">Our Customers</h2>
                    <p className="about-description">
                        The target market of the product is individuals with dietary restrictions/allergies and parents of children with dietary 
                        restrictions/allergies. Those with allergies, intolerances, and other restrictions are allowed to use our free service 
                        to benefit their own health at no cost. Our end goal of the product is to make the process of dining or ordering from 
                        a restaurant easier for those struggling with food allergies/dietary restrictions.
                    </p>
                </div>
            </div>
            <h2 className="sub-title">Future website updates:</h2>
            <ul>
                <li> - Order Menu Items by Severity</li>
                <li> - Adjust font scheme across website</li>
                <li> - Complete automation of backend features</li>
                <li> - Optimize settings page</li>
                <li> - Complete color scheming algorithm</li>
            </ul>
        </div>
    );
};

export default AboutUs;
