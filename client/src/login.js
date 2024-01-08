import React, { useState } from 'react';
import './login.css'; // Make sure you have a corresponding CSS file for styling.
import axios from "axios";

const LoginPage = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {

      //go to python file
      const url = "http://localhost:3000/login";
      axios
          .post(url, email, password)
          .then((response) => {
              if (response.status === 200) {
                  return response.data;
              } else {
                  throw new Error(response.statusText);
              }
          })
          .catch((error) => {
              console.error(error);
          });
      


      // Perform client-side validation
      if (!email || !password) {
        setErrorMessage('Please enter both email and password');
        return;
      }

      // Make a POST request to your backend using Axios
      // const response = await axios.post('http://your-python-backend-url/login', {
        // email,
        // password,
      // });

      // if (response.status !== 200) {
      //   // Handle authentication failure
      //   setErrorMessage(response.data.message || 'Login failed');
      //   return;
      // }

      // Login successful
      // Redirect the user to a new page, for example, a dashboard
      // history.push('/dashboard');
      console.log("ok")
    } catch (error) {
      console.error('Login failed:', error);
      setErrorMessage('Login failed. Please try again later.');
    }
  };
  return (
    <div className="container">
      <h1 className="title">Login</h1>
      <button className="registerContainer" onClick={() => history.push('/SignUpPage')}>
        Register
      </button>
      <input
        className={`input ${errors.email ? 'invalidInput' : ''}`}
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setErrors(prevErrors => ({ ...prevErrors, email: '' }));
        }}
      />
      <input
        className={`input ${errors.password ? 'invalidInput' : ''}`}
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          setErrors(prevErrors => ({ ...prevErrors, password: '' }));
        }}
      />
      <button className="forgotPassword" onClick={() => history.push('/ForgetPassword')}>
        Forgot Password?
      </button>
      {errorMessage && <p className="errorMessage">{errorMessage}</p>}
      <button className="loginButton" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
export default LoginPage;