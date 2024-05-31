import React, { useState } from 'react';
import './Tooltip.css';

export const Tooltip = () => {
  const [hovered, setHovered] = useState(false);

  return (

    <img 
      src={hovered ? "src/assets/tooltip2.svg" : "src/assets/tooltip.svg"}
      className={hovered ? "tooltip hovered" : "tooltip"}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      alt="tooltip"
    />
   
  );
};