import React from "react";
import './settings.css';
import Option from "../Components/SettingsElement/option.js"

const Settings = () => {
    return(
        <>
            <div class='settingsMenu'>
                <Option type="Eggs"/>
                <Option type="Fruit"/>
                <Option type="Lactose"/>
                <Option type="Peanuts"/>
                <Option type="Seafood/Shellfish"/>
                <Option type="Sesame"/>
                <Option type="Soy"/>
                <Option type="Tree Nuts"/>
                <Option type="Vegetables"/>
                <Option type="Wheat"/>
            </div>
        </>
        
    );
}

export default Settings