import React, { useState } from 'react';
import './Tooltip.css';

export const Tooltip = () => {
  const [hovered, setHovered] = useState(false);

  return (

    <img 
      src={hovered ? "https://i.ibb.co/Kxx6LfD/tooltip2.png" : "https://i.ibb.co/nsFjfgX/tooltip1.png"}
      className={hovered ? "tooltip hovered" : "tooltip"}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      alt="tooltip"
    />
   
  );
};