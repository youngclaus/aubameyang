import React, {useState} from 'react';
import './display.css';

import Cookies from 'universal-cookie'
const cookies = new Cookies();

function Box({ children, ...props }) {
    return <div {...props}>{children}</div>
}

function RestaurantDetails({ restaurant, onBackClick }) {
  
  const [menuData, setData] = React.useState(null);

  let googleID = restaurant.place_id;//static for testing

  React.useEffect(() => {
    googleID = restaurant.place_id;
    fetch(`/restaurants/${googleID}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

    return (
      <Box
        style={{
          margin: '1em 0',
          padding: '1.4em',
          background: '#ffffff',
          opacity: 1,
          position: 'absolute',
          zIndex: 3,
          right: '40%',
          top: '13%',
          width: '50vw',
          height: '70vh',
          border: '0.1em #97fcf7',
          borderStyle: 'solid',
          borderRadius: '2rem',
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }} >
            <h3>{restaurant.name}</h3>
            <div className="exit" onClick={onBackClick}>Exit</div>
        </div>
        <p>Address: {restaurant.vicinity}</p>
        <p>Rating: {restaurant.rating}</p>
        <p>Menu Items:{/*restaurant.place_id*/}</p>
        <ul className="Menu">
          { (!menuData) ? 
            <p>Loading...</p> :
            menuData.map(GenMenu)
          }
        </ul>
        </Box>
    );
}

//portion that makes the menu
const GenMenu = (item, i) => {
  let warningString = "";
  let severity = 0;
  let testAllergen = "";
  item.warning.map((x, i) => {
    (i == 0) ? warningString = x : warningString = warningString + ", " +x;
    testAllergen = x.charAt(0).toUpperCase() + x.substring(1);
    if (cookies.get(`${testAllergen}`) && cookies.get(`${testAllergen}Value`) > severity) {
      severity = cookies.get(`${testAllergen}Value`);
    }
  })
  return(
    <li className={`menuItem${severity}`} key={i} id={severity}>
      <h4>{item.name}</h4>
      {(item.price != "") ? <p className="price">{item.price}</p> : null}
      {(item.warning.length > 0) ? <p>contains: {warningString}</p> : null}
      {(item.desc != "") ? <p>{item.desc}</p> : null}
    </li>
    );
}


const RestaurantList = ({ restaurants }) => {
    const [openCardIndex, setOpenCardIndex] = useState(-1);
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);

    const toggleCard = async (index) => {
        if (openCardIndex === index) {
            setOpenCardIndex(-1);
            setSelectedRestaurant(null);
        } else {
            setOpenCardIndex(index);
            setSelectedRestaurant(restaurants[index]);
        }
    };

    const handleBackClick = () => {
        setOpenCardIndex(-1);
        setSelectedRestaurant(null);
    }

    return (
      <div>
        <h2 className='title'>Nearby Restaurants</h2>
        <ul className='list'>
            {restaurants && restaurants.map((restaurant, index) => (
                <div key={index} className="card" onClick={() => toggleCard(index)}>
                    <h3 className="restaurant-li">{restaurant.name}</h3>
                    {openCardIndex === index && (
                        <div className='dropdown' style={{color:'#8776ff'}} onClick={() => setSelectedRestaurant(restaurant)}/>
                    )}
                </div>
            ))}
        </ul>
        {selectedRestaurant && <RestaurantDetails restaurant={selectedRestaurant} onBackClick={handleBackClick} />}
        {!selectedRestaurant && (
            <Box style={{
                    margin: '1em 0',
                    padding: '1.4em',
                    background: "#ffffff",
                    opacity: 0.7,
                    position: 'absolute',
                    zIndex: 2,
                    right: '5rem',
                    top: '13%',
                    width: 250,
                    height: '70vh',
                    border: '0.1em #97fcf7',
                    borderStyle: 'solid',
                    borderRadius: '2rem'
                }}
        />
        )}
      </div>
    );
  };

  export default RestaurantList;