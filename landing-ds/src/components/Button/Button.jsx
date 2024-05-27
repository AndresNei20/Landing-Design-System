import React from 'react';
import './Button.css';

const Button = ({ text, primary }) => {
  return (
    <button className={`button ${primary ? 'primary' : ''}`}>
      {text}
    </button>
  );
};

export default Button;