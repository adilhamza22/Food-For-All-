import React from 'react';

const Donors = () => {
  const donors = [
    {
      id: 1,
      name: 'John Doe',
      address: '1234 Main Street',
      phone: '555-555-1234',
      hasFoodToDonate: true
    },
    {
      id: 2,
      name: 'Jane Smith',
      address: '5678 Elm Street',
      phone: '555-555-5678',
      hasFoodToDonate: false
    },
    {
      id: 3,
      name: 'Bob Johnson',
      address: '9101 Oak Street',
      phone: '555-555-9101',
      hasFoodToDonate: true
    },
    {
      id: 4,
      name: 'Samantha Lee',
      address: '1212 Maple Street',
      phone: '555-555-1212',
      hasFoodToDonate: true
    }
  ];

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
