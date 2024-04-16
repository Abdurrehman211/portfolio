// Navbar.js
import React from 'react';
import './Navbar.css';
import Img1 from './images/Reactlogo.png';

const Navbar = ({ toggleMenu, isMenuOpen }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <div className="logo">
            <img className='Rimage1' src={Img1} alt='Logo' width="50px" />
          </div>
          <div className="name">
            <span className='name'>
              Portfolio
            </span>
          </div>
        </div>
        <a href='/' ><span className='nav1' >Pricing</span></a>
        <a href='#projects' ><span className='nav2'>Projects</span></a>
        <a href='/' ><span className='nav3'>Links</span></a>
        <button className="navbar-toggle" onClick={toggleMenu}>
          <span className="navbar-icon">&#9776;</span>
        </button>
        {isMenuOpen && (
          <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
            <li className="navbar-item">
              <a href="#home" className="navbar-link" onClick={toggleMenu}>
                Home
              </a>
            </li>
            <li className="navbar-item">
              <a href="#aboutme" className="navbar-link" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li className="navbar-item">
              <a href="#projects" className="navbar-link" onClick={toggleMenu}>
                Services
              </a>
            </li>
            <li className="navbar-item">
              <a href="#contact" className="navbar-link" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
