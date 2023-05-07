import React, { useState } from 'react';
// import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Route, Switch, Redirect, Routes } from 'react-router-dom';
import './App.css';
import Signup from './SignUp.jsx';
import Login from './Login.jsx';
import Dashboard from './DashBoard.jsx';
import Restaurants from './Restaurants.jsx';
import Donors from './Donor.jsx';
import NGO from './NGO.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <Routes>
       <Route path="/signup" element={<Signup />} />
       <Route path="/login" element={<Login />} />
       <Route path="/restaurants" element={<Restaurants/>} />
       <Route path="/donors" element={<Donors/>} />
       <Route path="/NGO" element={<NGO/>} />
       <Route path="/" element={<Dashboard />} />

    </Routes>
  )
};

export default App;
