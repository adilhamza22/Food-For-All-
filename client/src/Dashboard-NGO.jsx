import React from 'react';
import Restaurants from './Restaurants.jsx';
import Donors from './Donor.jsx';
import NGOs from './NGO.jsx'
import NavBar from './NavBar-NGO.jsx'; 
import logo from './ffa.png';
// import './DashBoard.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
  return (
    <div>
      <NavBar fixed="top" />
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src={logo} alt="FoodForAll" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h1>FoodForAll</h1>
            <p>The Leftover project is a web application that aims to reduce food waste by connecting restaurants with surplus food to nearby NGOs that can distribute the excess food to people in need. The application allows restaurants to post information about their available surplus food and NGOs to request that food. The system also includes a dashboard where administrators can manage and monitor the food donations and requests. Overall, the project aims to help reduce food waste and support those in need of food assistance.</p>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default Dashboard;
