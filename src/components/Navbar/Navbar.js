import React from 'react';
import { FaRegCompass, FaRegHeart, FaSistrix, FaTelegramPlane } from 'react-icons/fa';
import { MdHome } from 'react-icons/md';
import { useAuth } from '../../Contexts/AuthContext';
import './Navbar.elements.css';

const Navbar = () => {
    const { openModal, user, loader, logout } = useAuth();
    
    const openForm = () => {
        openModal();
    };

    const userLogout = () => {
        logout();
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
                    {!loader && !user ? (
                        <li onClick={openForm}>Register/Login</li>
                        ) : (
                        <li>{user && user.displayName} / <span onClick={userLogout}>Logout</span></li>
                    )}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
