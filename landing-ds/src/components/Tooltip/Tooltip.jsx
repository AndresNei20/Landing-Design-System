import React, { useState } from 'react';
import './Tooltip.css';

export const Tooltip = () => {
  const [hovered, setHovered] = useState(false);

  return (

    <img 
      src={hovered ? "https://i.postimg.cc/1zpXbNQD/tooltip2.png" : "https://i.postimg.cc/T35pq4N7/tooltip.png"}
      className={hovered ? "tooltip hovered" : "tooltip"}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      alt="tooltip"
    />
   
  );
};