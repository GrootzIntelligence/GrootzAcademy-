import React, { useState, useEffect } from 'react';
import { FiPhone, FiSearch, FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import '../components/css/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="left-section">
        <div className="logo">
          <Link to="/" className="logo-link">
          <img
            src="/G-logo.png"
            alt="Grootz Academy"
            className="logo-img"
          />
          </Link>
        </div>
        {!isMobile && (
          <div className="menu">
            <Link to="/courses" className="menu-item">Courses<span className="underline"></span></ Link>
            <Link to="/single" className="menu-item">Free Study Material<span className="underline"></span></Link>
          </div>
        )}
      </div>
      {isMobile ? (
        <div className="mobile-menu-toggle" onClick={toggleMenu}>
          {isOpen ? <FiX className="icon" /> : <FiMenu className="icon" />}
        </div>
      ) : (
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
      )}
      {isMobile && isOpen && (
        <div className="mobile-menu">
          <a href="#" className="mobile-menu-item">Courses</a>
          <a href="#" className="mobile-menu-item">Free Study Material</a>
          <div className="mobile-contact">
            <FiPhone className="icon" />
            <span>XXXXXXXXXX</span>
          </div>
          <button className="mobile-sign-up-btn">Sign Up</button>
          <div className="mobile-search-bar">
            <FiSearch className="icon" />
            <input type="text" placeholder="search" className="mobile-search-input" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;