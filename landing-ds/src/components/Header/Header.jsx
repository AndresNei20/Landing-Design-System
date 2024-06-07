import React from 'react';
import './Header.css';

const Header = () => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
        
      <div className="logo">
      <img className='logoimg' src='https://i.ibb.co/tqjzrsY/logodavi.png'></img>
        <p>A Design System by UNITY</p>
        </div>
      <nav>
        <ul>
          <li><a  onClick={() => scrollToSection('overview')}>Overview</a></li>
          <li><a  onClick={() => scrollToSection('features')}>Features</a></li>
          <li><a  onClick={() => scrollToSection('modes')}>Modes</a></li>
          <li><a  onClick={() => scrollToSection('access')}>Access</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;