import React from 'react';
import Restaurants from './Restaurants.jsx';
import Donors from './Donor.jsx';
import NGOs from './NGO.jsx' 
import './DashBoard.scss'
const Dashboard = () => {
  return (
    <div>
      <h1>Welcome to the Dashboard!</h1>
      <p>This is where you'll find all the information and tools you need to manage your account.</p>
      <ul className='List' id= 'List'>
        
        <li><Restaurants/></li>
        <li><Donors/></li>
        <li><NGOs/></li>

      </ul>
    </div>
  );
}

export default Dashboard;
