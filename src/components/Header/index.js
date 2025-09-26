
import React, { useState } from 'react';
import './index.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-styles" />
        <p className='logo-name-styles'>Stack Beast</p>
      </div>

      <div className="hamburger" onClick={handleHamburgerClick}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <nav className={menuOpen ? 'open' : ''}>
        <Link to="/" className='nav-item-styles' onClick={() => setMenuOpen(false)}>Home</Link>
        <a href="#about" className='nav-item-styles' onClick={() => setMenuOpen(false)}>About</a>
        <a href="#contact" className='nav-item-styles' onClick={() => setMenuOpen(false)}>Contact</a>
      </nav>
    </header>
  );
};

export default Header;
