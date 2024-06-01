import React from 'react';
import './Button.css';

const Button = ({ text, primary, link }) => {
  const handleClick = () => {
    if (link) {
      window.location.href = link;
    }
  };

  return (
    <button 
      className={`button ${primary ? 'primary' : ''}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
