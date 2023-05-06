import React from 'react';
import Restaurants from './Restaurants.jsx';
import Donors from './Donor.jsx';
import NGOs from './NGO.jsx'
import NavBar from './NavBar.jsx'; 
import './DashBoard.scss'
import './ffa.png';
const Dashboard = () => {
  return (
    <><NavBar fixed="top" />
    <body className='body'>
      <div>
        <h1>FoodForAll</h1>
        <div className='dashboard'>DashBoard

          <p>The Leftover project is a web application that aims to reduce food waste by connecting restaurants with surplus food to nearby NGOs that can distribute the excess food to people in need. The application allows restaurants to post information about their available surplus food and NGOs to request that food. The system also includes a dashboard where administrators can manage and monitor the food donations and requests. Overall, the project aims to help reduce food waste and support those in need of food assistance.</p>

        </div>
        <ul className='List' id='List'>

          <Restaurants />
          <Donors />
          <NGOs />

        </ul>
      </div>
    </body></>
  );
}

export default Dashboard;
