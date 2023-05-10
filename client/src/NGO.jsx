// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Container, Row, Col, Card } from 'react-bootstrap';
// import NavBar from './NavBar';

// function NGOs() {
//   const [ngos, setNGOs] = useState([]);

//   useEffect(() => {
//     axios.get('/ngos')
//       .then(res => setNGOs(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <Container>
//     <div><NavBar/></div>
//       <h1 className="my-4">NGOs</h1>
//       <Row>
//         {ngos.map((ngo, index) => (
//           <Col key={index} md={4} className="my-3">
//             <Card>
//               <Card.Img variant="top" src={ngo.imageURL} alt={ngo.name} />
//               <Card.Body>
//                 <Card.Title>{ngo.name}</Card.Title>
//                 <Card.Text>{ngo.address}</Card.Text>
//                 <Card.Text>{ngo.phone}</Card.Text>
//                 <Card.Text>Verified: {ngo.isVerified ? 'Yes' : 'No'}</Card.Text>
//                 <Card.Text>Approved: {ngo.isApproved ? 'Yes' : 'No'}</Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// }

// export default NGOs;
import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import NavBar from './NavBar';

function NGOs() {
  const [ngos] = useState([
    {
      name: "NGO1",
      email: "ngo1@example.com",
      password: "password",
      address: "NGO1 Address",
      phone: "123456789",
      imageURL: "https://via.placeholder.com/150",
      isVerified: true,
      isApproved: true
    },
    {
      name: "NGO2",
      email: "ngo2@example.com",
      password: "password",
      address: "NGO2 Address",
      phone: "123456789",
      imageURL: "https://via.placeholder.com/150",
      isVerified: true,
      isApproved: false
    },
    {
      name: "NGO3",
      email: "ngo3@example.com",
      password: "password",
      address: "NGO3 Address",
      phone: "123456789",
      imageURL: "https://via.placeholder.com/150",
      isVerified: false,
      isApproved: true
    }
  ]);

  return (
    <Container>
      <div><NavBar/></div>
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
