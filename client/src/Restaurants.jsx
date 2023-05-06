import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios.get('/restaurants')
      .then(res => setRestaurants(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Container>
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
                </Card.Text>
                <Button variant="primary">View Menu</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Restaurants;
