
import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error state

    try {
      const response = await axios.post('http://localhost:5000/users/signin', { email, password });
      console.log('Login successful:', response.data);

      // Store token in localStorage or state management (like Context API)
      localStorage.setItem('token', response.data.token);

      // Check user role to redirect accordingly (optional based on your flow)
      if (response.data.role === 'admin') {
        navigate('/dashboard'); // Redirect to admin dashboard
      } else {
        navigate('/home'); // Redirect to user dashboard
      }
      
    } catch (err) {
      if (err.response) {
        console.log('Server responded with:', err.response.data);
        console.log('Response status:', err.response.status);
        if (err.response.status === 403) {
          setError('Access denied. You do not have permission to access this resource.');
        } else if (err.response.status === 404) {
          setError('Email not found. Please try again.');
        } else {
          setError(err.response.data.message || 'An error occurred during login.');
        }
      } else {
        setError('Network error. Please try again later.');
      }
      console.error('Login error:', err);
    }
  };

  return (
    <div className='login-container'>
      <div className='login-form'>
        <h2>SIGN IN</h2>
        {error && <p className='error-message'>{error}</p>}
        <label>Email Id
          <input type='email' placeholder='Enter your email id' onChange={handleChangeEmail} value={email} required />
        </label>
        <label>Password
          <input type='password' placeholder='Enter your password' onChange={handleChangePassword} value={password} required />
        </label>
        <br />
        <button onClick={handleSubmit}>Sign in</button>
        <br />
      </div>
    </div>
  );
};

export default Login;