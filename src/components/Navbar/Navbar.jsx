import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">StackNLearn</div>

      {/* Hamburger toggles to X */}
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? '×' : '☰'}
      </div>

      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#services" onClick={closeMenu}>Services</a></li>
        <li><a href="#stacks" onClick={closeMenu}>Stacks</a></li>
        <li><a href="#works" onClick={closeMenu}>Works</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
