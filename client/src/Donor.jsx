
import {React, useState, useEffect } from 'react';

const Donors = () => {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    // Fetch donors data from API endpoint
    fetch('/donors')
      .then(response => response.json())
      .then(data => setDonors(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
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
