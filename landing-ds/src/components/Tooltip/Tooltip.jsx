import React, { useState } from 'react';
import './Tooltip.css';

export const Tooltip = () => {
  const [hovered, setHovered] = useState(false);

  return (

    <img 
      src={hovered ? "../../../../public/tooltip2.svg" : "../../../../public/tooltip.svg"}
      className={hovered ? "tooltip hovered" : "tooltip"}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      alt="tooltip"
    />
   
  );
};