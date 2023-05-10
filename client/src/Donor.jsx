/*eslint disable next line*/
import {React, useState, useEffect } from 'react';
import NavBar from './NavBar';
const Donors = () => {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    // Fetch donors data from API endpoint
    fetch('http://localhost:8080/donors')
      .then(response => response.json())
      .then(data => setDonors(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
    <div><NavBar/></div>
      <h2>Donors</h2>
      {donors.map(donor => (
        <div key={donor.id}>
          <h3>{donor.name}</h3>
          <p>Address: {donor.address}</p>
          <p>Phone: {donor.phone}</p>
          <p>Has food to donate: {donor.hasFoodToDonate ? 'Yes' : 'No'}</p>
        </div>
      ))}
    </div>
  );
};

export default Donors;
