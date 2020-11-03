import React from 'react';
import { FaRegCompass, FaRegHeart, FaSistrix, FaTelegramPlane } from 'react-icons/fa';
import { MdHome } from 'react-icons/md';
import './Navbar.elements.css';

const Navbar = () => {
    const openForm = () => {
        
    };
    
    return (
        <nav className="navbar">
            <div className="nav-logo">
                <img src="/images/logo.png" alt="Instagram" />
            </div>
            <div className="nav-search">
                <input type="text" placeholder="Search..." />
                <FaSistrix className="search-icon" />
            </div>
            <div className="nav-icons">
                <ul>
                    <li><MdHome className="navbar-icon" /></li>
                    <li><FaTelegramPlane className="navbar-icon" /></li>
                    <li><FaRegCompass className="navbar-icon" /></li>
                    <li><FaRegHeart className="navbar-icon" /></li>
                    <li onClick={openForm}>Register/Login</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
