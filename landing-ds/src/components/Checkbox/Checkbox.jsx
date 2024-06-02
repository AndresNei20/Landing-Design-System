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
      src={clicked ? "../../../../public/check2.svg" : (hovered ? "../../../../public/check3.svg" : "https://i.ibb.co/HB0xt1k/checkbox1.png")}
      className={`checkbox ${hovered ? 'hovered' : ''} ${clicked ? 'clicked' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      alt="checkbox"
    />
  );
};
