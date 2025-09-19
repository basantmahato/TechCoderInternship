import React, { useState } from 'react';
import './NavBar.css'; 
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        
        <div className="logo-container">
          
          <div className="logo-icon">

            <img src="/logo2.png" alt="" />
           
          </div>
          <div className="clinic-text">
            <h1 className="clinic-name">DENTAL SPA</h1>
            <p className="dental-clinic-tag">Implants | Orthodontics | Dentistry</p>
          </div>
        </div>
        <div className="doctor-info">
          Dr. Praveen Pal
        </div>
      </div>

      <div className="mobile-only-title">DENTAL SPA</div> 

      <button className="menu-toggle" onClick={toggleMenu} aria-expanded={isOpen} aria-label="Toggle navigation">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;