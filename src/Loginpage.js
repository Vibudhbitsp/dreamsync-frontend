import React, { useState } from "react";
import "./LoginPage.css";

import logoImage from "./images/logo.png";
import backgroundImage from "./images/background.png"; // Import the new image file
import GoogleButton from 'react-google-button'
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    console.log("Login button clicked");
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleGoogleLogin = () => {
    console.log('Sign in with Google clicked');
  };
  return (
    <div className="login-page">
      <div className="background-container">
        <img src={backgroundImage} alt="Background" />
      </div>
      <div className="logo-container">
        <img src={logoImage} alt="Logo" />
      </div>
      <div className="form-container">
      <h1>Welcome</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            placeholder="Enter you email"
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            placeholder="Enter you password"
            onChange={handlePasswordChange}
            required
          />
        </div>
        </form>
        <div className="button-container">
        <button className="login-button">Sign In</button>
        <h2>Or</h2>
        <button className="google-button">Sign In with Google</button>
</div>

      
      </div>
    </div>
  );
};

export default LoginPage;
