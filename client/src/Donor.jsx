// /*eslint disable next line*/
// import {React, useState, useEffect } from 'react';
// import NavBar from './NavBar';
// const Donors = () => {
//   const [donors, setDonors] = useState([{
//     name: "User 1",
//     email: "user1@example.com",
//     password: "password1",
//     isNgo: true,
//     address: "Address 1",
//     phone: "1234567890",
//     imageURL: "https://example.com/user1.jpg"
//   },
//   {
//     name: "User 2",
//     email: "user2@example.com",
//     password: "password2",
//     isNgo: false,
//     address: "Address 2",
//     phone: "9876543210",
//     imageURL: "https://example.com/user2.jpg"
//   },  ]);

  
//   // You can use the `userData` array to save the data to the database
//   // using Mongoose or any other method you prefer.
  

//   return (
//     <div>
//     <div><NavBar/></div>
//       <h2>Donors</h2>
//       {donors.map(donor => (
//         <div key={donor.id}>
//           <h3>{donor.name}</h3>
//           <p>Address: {donor.address}</p>
//           <p>Phone: {donor.phone}</p>
//           <p>Has food to donate: {donor.hasFoodToDonate ? 'Yes' : 'No'}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Donors;
import React, { useState } from 'react';
import NavBar from "./NavBar-NGO.jsx";

const Donors = () => {
  const [donors, setDonors] = useState([
    {
      name: "Babik Ayaz",
      email: "bobik1@example.com",
      password: "password1",
      isNgo: true,
      address: "Address 1",
      phone: "1234567890",
      hasFoodToDonate:true,
      imageURL: "https://www.shutterstock.com/image-vector/bearded-man-prison-garb-icon-600w-488168188.jpg"
    },
    {
      name: "Abdul Wahab",
      email: "AW@example.com",
      password: "password2",
      isNgo: false,
      address: "Address 2",
      phone: "9876543210",
      hasFoodToDonate:false,
      imageURL: "https://www.shutterstock.com/image-vector/man-wearing-keffiyeh-linear-icon-600w-1266300535.jpg"
    },
  ]);

  return (
    <div>
      <NavBar />
      <div className="container">
        <h2>Donors</h2>
        {donors.map((donor, index) => (
          <div className="card mb-3" key={index}>
            <img src={donor.imageURL} className="card-img-top" alt={donor.name} height={500} width={300}  />
            <div className="card-body">
              <h5 className="card-title">{donor.name}</h5>
              <p className="card-text">Address: {donor.address}</p>
              <p className="card-text">Phone: {donor.phone}</p>
              <p className="card-text">
                Has food to donate: {donor.hasFoodToDonate ? 'Yes' : 'No'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Donors;
