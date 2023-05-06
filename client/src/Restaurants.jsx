import React from 'react';

const restaurants = [
  {
    id: 1,
    name: 'Pizza Place',
    address: '123 Main St',
    phone: '555-555-1234',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Burger Joint',
    address: '456 Oak Ave',
    phone: '555-555-5678',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Taco Stand',
    address: '789 Elm St',
    phone: '555-555-9012',
    imageUrl: 'https://via.placeholder.com/150',
  },
];

const Restaurants = () => {
  return (
    <div>
      <h2>Restaurants</h2>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <h3>{restaurant.name}</h3>
            <p>{restaurant.address}</p>
            <p>{restaurant.phone}</p>
            <img src={restaurant.imageUrl} alt={restaurant.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Restaurants;
