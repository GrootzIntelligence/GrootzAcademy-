import React from 'react';
import { FiPhone, FiSearch } from 'react-icons/fi';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left-section">
        <div className="logo">
          <img
            src="/G-logo.png"   
            alt="Grootz Academy"
            className="logo-img"
          />
        </div>

        <div className="menu">
          <a href="#" className="menu-item">Courses<span className="underline"></span></a>
          <a href="#" className="menu-item">Free Study Material<span className="underline"></span></a>
        </div>
      </div>
      <div className="right-section">
        <div className="contact">
          <FiPhone className="icon" />
          <span>XXXXXXXXXX</span>
        </div>

        <button className="sign-up-btn">Sign Up</button>

        <div className="divider"></div>

        <div className="search-bar">
          <FiSearch className="icon" />
          <input type="text" placeholder="search" className="search-input short" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
