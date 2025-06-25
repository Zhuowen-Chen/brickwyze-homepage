import React from "react";
import logo from '../assets/images/logo1.png';

const Login = () => {
  return (
    <div className="login-page">
        <div className="login-card">
            <div className="nav-left">
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Help</a>
            </div>
            
            <h2 className="login-title">Login</h2>
            <p className="login-subtitile">Sign in to your account</p>
            <form className="login-form">
                <input type="text" placeholder="Username/Email" />
                <input type="password" placeholder="Password" />
                <a href="#" className="forgot-password">Forgot password?</a>
                <button type="submit" className="login-button">Login</button>
                <button type="button" className="register-button">Register New Account</button>
            </form>
        </div>
    </div>
  );
};

export default Login;
