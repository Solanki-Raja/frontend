import React, { useState } from 'react';
import backgroundImage from './background.jpg'; // Make sure the path to your image is correct
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // For handling error messages

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the login data
    const loginData = {
      email: email,
      password: password,
    };

    try {
      // Send the login data to the server (replace 'your-api-endpoint' with your actual API)
      const response = await fetch('http://localhost:8000/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      // Handle the response
      const data = await response.json();

      if (response.ok) {
        // Login was successful, handle success (e.g., redirect to another page or save tokens)
        console.log('Login successful:', data);
        // You can redirect the user or store the token in local storage/session storage
        // Example: localStorage.setItem('token', data.token);
      } else {
        // If there was an error, display an error message
        setErrorMessage(data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      // Handle network errors or other errors
      console.error('Error during login:', error);
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div
      className="login-page"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="login-container">
        <div className="login-left">
          <h1>Find, Navigate, Explore</h1>
          <p>Discover new venues, meet great people, and elevate your social life.</p>
        </div>

        <div className="login-right">
          <h2>Sign in</h2>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-options">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#forgot-password">Forgot Password</a>
            </div>
            <button type="submit" className="btn-signin">Sign in now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
