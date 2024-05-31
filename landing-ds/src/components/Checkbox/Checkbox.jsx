import React, { useState } from 'react';
import './Checkbox.css';

export const Checkbox = () => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleMouseEnter = () => {
    if (!clicked) {
      setHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!clicked) {
      setHovered(false);
    }
  };

  const handleClick = () => {
    setClicked(prevState => !prevState);
  };

  return (
    <img 
      src={clicked ? "src/assets/check2.svg" : (hovered ? "src/assets/check3.svg" : "src/assets/check.svg")}
      className={`checkbox ${hovered ? 'hovered' : ''} ${clicked ? 'clicked' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      alt="checkbox"
    />
  );
};
