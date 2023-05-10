// /* eslint-disable */

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Container, Row, Col, Card, Button, Navbar } from 'react-bootstrap';
// import NavBar from "./NavBar"
// function Restaurants() {
//   const [restaurants, setRestaurants] = useState([]);

//   useEffect(() => {
//     axios.get('/restaurants')
//       .then(res => setRestaurants(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <Container>
//     <div><NavBar/></div>
//       <h1 className="mt-5 mb-4">Restaurants</h1>
//       <Row>
//         {restaurants.map((restaurant, index) => (
//           <Col md={4} key={index} className="mb-4">
//             <Card>
//               <Card.Img variant="top" src={restaurant.imageURL} alt={restaurant.name} />
//               <Card.Body>
//                 <Card.Title>{restaurant.name}</Card.Title>
//                 <Card.Text>
//                   {restaurant.address}<br />
//                   {restaurant.phone}<br />
//                   Rating: {restaurant.rating}
//                 </Card.Text>
//                 <Button variant="primary">View Menu</Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// }

// export default Restaurants;
/* eslint-disable */
import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Navbar } from 'react-bootstrap';
import Swal from 'sweetalert2';
import NavBar from "./NavBar-NGO.jsx"
import pancake from "./pancake.jpg"
import dinner from "./dinner.jpg"
import tomato from "./tomato.jpg"
function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  useEffect(() => {
    const data = [
      {
        name: 'Lineage Delicious',
        imageURL: 'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600',
        address: '123 Main Street',
        phone: '555-123-4567',
        rating: 4.5,
        hasFoodToDonate:false,
      },
      {
        name: 'Western Cafe',
        imageURL: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        address: '456 Oak Avenue',
        phone: '555-234-5678',
        rating: 4.0,
        hasFoodToDonate:false,

      },
      {
        name: 'Cravings',
        imageURL: 'https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        address: '789 Elm Boulevard',
        phone: '555-345-6789',
        rating: 3.5,
        hasFoodToDonate:false,

      }
    ];

    setRestaurants(data);
  }, []);
  
  const successAlert = () => {
    Swal.fire({  
        title: 'Requested For Donation!',  
        text: '',
        icon: 'success'
      }); 
}
  const handleViewDetails = (restaurant) => {
    // successAlert();
    setSelectedRestaurant(restaurant);

  };

 


  return (
    <Container>
    <div><NavBar/></div>
      <h1 className="mt-5 mb-4">Restaurants</h1>
      <Row>
        {restaurants.map((restaurant, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Img variant="top" src={restaurant.imageURL} alt={restaurant.name} />
              <Card.Body>
                <Card.Title>{restaurant.name}</Card.Title>
                <Card.Text>
                  {restaurant.address}<br />
                  {restaurant.phone}<br />
                  Rating: {restaurant.rating}
                  <p>
                Has food to donate: {restaurant.hasFoodToDonate ? 'Yes' : 'No'}
                </p>
                </Card.Text>
                <Button variant="primary" onClick={() => handleViewDetails(restaurant)}>
                  View Details
                </Button>
              
              </Card.Body>
            
              <Button variant="dark" onClick={()=>successAlert()}>
                  Request Donation
                </Button>
            </Card>
          </Col>
        ))}
      </Row>
      {selectedRestaurant && (
        <div>
          <h2>Restaurant Details</h2>
          <p>Name: {selectedRestaurant.name}</p>
          <p>Address: {selectedRestaurant.address}</p>
          <p>Phone: {selectedRestaurant.phone}</p>
          <p>Rating: {selectedRestaurant.rating}</p>
          
        </div>
      )}
    </Container>
  );
}

export default Restaurants;
