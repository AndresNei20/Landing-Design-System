import React, { useState } from 'react';
import './Tooltip.css';

export const Tooltip = () => {
  const [hovered, setHovered] = useState(false);

  return (

    <img 
      src={hovered ? "https://i.postimg.cc/Nj1Rp8n1/Hover-Tooltip.png" : "https://i.postimg.cc/Ls2L7YdG/Tooltip.png"}
      className={hovered ? "tooltip hovered" : "tooltip"}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      alt="tooltip"
    />
   
  );
};