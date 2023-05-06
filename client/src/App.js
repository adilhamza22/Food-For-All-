import React, { useState } from 'react';
// import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Route, Switch, Redirect, Routes } from 'react-router-dom';
import './App.css';
import Signup from './SignUp';
import Login from './Login';
import Dashboard from './DashBoard';
import Restaurants from './Restaurants';
import Donors from './Donor';
import NGO from './NGO';

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
