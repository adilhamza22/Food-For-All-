// import React, { useState } from 'react';
// import { Button, Form } from 'react-bootstrap';

// const SignupForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [address, setAddress] = useState('');
//   const [phone, setPhone] = useState('');
//   const [imageURL, setImageURL] = useState('');
//   const [userType, setUserType] = useState('individual');

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const userData = {
//       name,
//       email,
//       password,
//       userType,
//       address,
//       phone,
//       imageURL,
//     };

//     fetch("/http:localhost:8080/signup", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(userData),
//     })
//       .then((response) => response.json())
//       .then((data) => console.log(data))
//       .catch((error) => console.log(error));
//   };


//   return (
//     <Form onSubmit={handleSubmit}>
//       <Form.Group controlId="name">
//         <Form.Label>Name</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="Enter name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </Form.Group>

//       <Form.Group controlId="email">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control
//           type="email"
//           placeholder="Enter email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </Form.Group>

//       <Form.Group controlId="password">
//         <Form.Label>Password</Form.Label>
//         <Form.Control
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </Form.Group>
//       <Form.Group>
//       <Form.Label>Type</Form.Label>

//           <select
//             id="userType"
//             value={userType}
//             onChange={(e) => setUserType(e.target.value)}
//           >
//             <option value="">Select User Type</option>
//             <option value="NGO">NGO</option>
//             <option value="Individual">Individual</option>
//           </select>
//         </Form.Group>
//       <Form.Group controlId="address">
//         <Form.Label>Address</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="Enter address"
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//         />
//       </Form.Group>

//       <Form.Group controlId="phone">
//         <Form.Label>Phone number</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="Enter phone number"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//         />
//       </Form.Group>

//       <Form.Group controlId="imageURL">
//         <Form.Label>Image URL</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="Enter image URL"
//           value={imageURL}
//           onChange={(e) => setImageURL(e.target.value)}
//         />
//       </Form.Group>

//       <Form.Group controlId="userType">
//         <Form.Label>User Type</Form.Label>
//         <Form.Check
//           type="radio"
//           label="Individual"
//           name="userType"
//           value="individual"
//           checked={userType === 'individual'}
//           onChange={(e) => setUserType(e.target.value)}
//         />
//         <Form.Check
//           type="radio"
//           label="NGO"
//           name="userType"
//           value="ngo"
//           checked={userType === 'ngo'}
//           onChange={(e) => setUserType(e.target.value)}
//         />
//       </Form.Group>

//       <Button variant="primary" type="submit">
//         Sign up
//       </Button>
//     </Form>
//   );
// };

// export default SignupForm;
import { useState } from 'react';
import logo from './ffa.png';

function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };
  const onLog =(e)=>{
    window.location.href = '/signin';
  };

//  // Save user data to session storage
//  sessionStorage.setItem('userData', JSON.stringify(userData));
//  // Redirect to the signin page
//  window.location.href = '/signin';



  
  const handleSubmit = (event) => {
    event.preventDefault();
    const users = JSON.parse(localStorage.getItem(userType)) || [];
    const currentUser = users.find(user => user.email === email);

    if (currentUser) {
      alert('User already exists!');
      window.location.href='/signin';

      return;
    }

    const newUser = { email, password,userType };
    users.push(newUser);
    sessionStorage.setItem(newUser,JSON.stringify(users));
    // console.log(users[0]);
    // localStorage.setItem(userType, JSON.stringify(users));
    alert('User signed up successfully!');
    window.location.href= '/signin';
  };

  // const handleSignup = (userData) => {
  //   // Save user data to session storage
  //   sessionStorage.setItem('userData', JSON.stringify(userData));
  //   // Redirect to the signin page
  //   window.location.href = '/signin';
  // };

  return (
    <div className="col align-items-center">
      <div className="col-md-6">
        <img src={logo} alt="FoodForAll" className="img-fluid" />
      </div>
      <div className="col-md-6">
        <form className="form-signup" onSubmit={handleSubmit}>
          <h1 className="h3 mb-3 fw-normal">Sign Up</h1>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="form-floating">
            <select
              className="form-select"
              id="floatingSelect"
              value={userType}
              onChange={handleUserTypeChange}
              required
            >
              <option value="">Select User Type</option>
              <option value="donors">Donor</option>
              <option value="ngos">NGO</option>
              <option value="restaurants">Restaurant</option>
            </select>
            <label htmlFor="floatingSelect">User Type</label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign Up
          </button>
        </form>
        <button className="w-100 btn btn-lg btn-dark" type="submit"onClick={onLog} >
            Already have an account? 
      </button>
      </div>
     
    </div>
  );
}



export default SignupForm;

