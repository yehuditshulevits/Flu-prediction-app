import React, { useState } from 'react';
import './LoginPage.css'; // Make sure you have a corresponding CSS file for styling.

const LoginPage = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const handleLogin = () => {
    // Add your logic for handling login here.
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