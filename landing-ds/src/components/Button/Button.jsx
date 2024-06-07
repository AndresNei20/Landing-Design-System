import React from 'react';
import './Button.css';

const Button = ({ text, primary, link }) => {
  const handleClick = () => {
    if (link.startsWith('http') || link.startsWith('www')) {
      window.open(link, '_blank');
    } else {
      const section = document.getElementById(link);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
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