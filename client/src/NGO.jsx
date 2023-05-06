import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';

function NGOs() {
  const [ngos, setNGOs] = useState([]);

  useEffect(() => {
    axios.get('/ngos')
      .then(res => setNGOs(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Container>
      <h1 className="my-4">NGOs</h1>
      <Row>
        {ngos.map((ngo, index) => (
          <Col key={index} md={4} className="my-3">
            <Card>
              <Card.Img variant="top" src={ngo.imageURL} alt={ngo.name} />
              <Card.Body>
                <Card.Title>{ngo.name}</Card.Title>
                <Card.Text>{ngo.address}</Card.Text>
                <Card.Text>{ngo.phone}</Card.Text>
                <Card.Text>Verified: {ngo.isVerified ? 'Yes' : 'No'}</Card.Text>
                <Card.Text>Approved: {ngo.isApproved ? 'Yes' : 'No'}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default NGOs;
