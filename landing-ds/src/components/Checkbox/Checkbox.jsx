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
      src={clicked ? "https://i.postimg.cc/yd3tJ5V6/checkboxempty.png" : (hovered ? "https://i.postimg.cc/fbr1RZQg/checkbox2.png" : "https://i.postimg.cc/cJHVWC2n/checkbox.png")}
      className={`checkbox ${hovered ? 'hovered' : ''} ${clicked ? 'clicked' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      alt="checkbox"
    />
  );
};
