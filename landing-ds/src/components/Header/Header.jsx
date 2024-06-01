import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
        
      <div className="logo">
      <img className='logoimg' src='src/assets/logodavi.png'></img>
        <p>Daviplata Version 1.0</p>
        </div>
      <nav>
        <ul>
          <li><a href="#overview">Overview</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#modes">Modes</a></li>
          <li><a href="#access">Access</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;