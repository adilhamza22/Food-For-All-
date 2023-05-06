import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [userType, setUserType] = useState('individual');

  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = {
      name,
      email,
      password,
      userType,
      address,
      phone,
      imageURL,
    };

    fetch("/http:localhost:8080/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };


  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
      <Form.Label>Type</Form.Label>

          <select
            id="userType"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="">Select User Type</option>
            <option value="NGO">NGO</option>
            <option value="Individual">Individual</option>
          </select>
        </Form.Group>
      <Form.Group controlId="address">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="phone">
        <Form.Label>Phone number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="imageURL">
        <Form.Label>Image URL</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter image URL"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="userType">
        <Form.Label>User Type</Form.Label>
        <Form.Check
          type="radio"
          label="Individual"
          name="userType"
          value="individual"
          checked={userType === 'individual'}
          onChange={(e) => setUserType(e.target.value)}
        />
        <Form.Check
          type="radio"
          label="NGO"
          name="userType"
          value="ngo"
          checked={userType === 'ngo'}
          onChange={(e) => setUserType(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Sign up
      </Button>
    </Form>
  );
};

export default SignupForm;
