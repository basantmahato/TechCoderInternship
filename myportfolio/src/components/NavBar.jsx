import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

// The component now accepts a 'navData' prop
const NavBar = ({ navData }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Destructure the navData prop for easier access
  const {
    
    Name,
    Role,
    navLinks
  } = navData;


  const div1 ="<" ;
  const div2 ="/" ;
  const div3 =">" ;

  return (
    <nav className={`navbar ${isOpen ? 'menu-open' : ''}`}>
      <div className="navbar-header-mobile">
        <div className="navbar-brand">
          <div className="logo-container">
            <div className="logo-icon">

              <div className='icon'>{div1}{div2}{div3}</div>
              
              
            </div>
            <div className="name-text">
              {/* Use the clinicName and clinicTag props */}
              <h1 className="dev-name">{Name}</h1>
              {/* <p className="role-text">{Role}</p> */}
            </div>
          </div>
         
        </div>

        <button className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu} aria-expanded={isOpen} aria-label="Toggle navigation">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <ul>
          {/* Map over the navLinks array to dynamically create navigation items */}
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.path} onClick={() => setIsOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;