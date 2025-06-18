import React from 'react';
import logo from '../assets/images/logo1.png';

const Navbar = () => {
    return (
        <nav style={{ fontFamily: "'Simonetta', serif" }} className="navbar">
            {/* Left-side navigation links */}
            <div className="nav-left">
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Help</a>
            </div>

            {/* center logo */}
            <div className="nav-center">
                <img src={logo} alt="BrickWyze Logo" className='logo' />
            </div>

            {/* Right-side function buttons */}
            <div className='nav-right'>
                <a href="/shortlist">Shortlist</a>
                <a href="/login" className="login-btn">Login / Register</a>
            </div>
        </nav>
    );
};

export default Navbar;