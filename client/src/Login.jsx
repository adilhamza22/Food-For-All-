import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import './Auth.scss'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;
  // const history = useHistory();
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const body = JSON.stringify(formData);
      const res = await axios.post('http://localhost:8080/login', body, config);
      console.log(res.data);
      // Redirect to the dashboard page
      window.location.href = '/dashboard';

    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={onChange}
            minLength='6'
          />
        </div>
        <button type='submit'>Log In</button>
      </form>
      <p>
        Don't have an account? <Link to='/signup'>Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
