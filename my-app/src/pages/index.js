import React from 'react';
import logo from "../img/logoIteration2.png";
import './index.css';

const Home = () => {
  return (
    <div>
      <div className="app-background" />
      <div className='app-logo-container'>
        <img className="app-logo" src={logo} alt="logo"/>
      </div>
        
      </div>
  );
};
  
export default Home;