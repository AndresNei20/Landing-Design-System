import React, { useState } from 'react';
import './Value.css';


export const Value = ({ img, text, hoverIcon, id, description}) => {
  const[isHovered, setIsHovered] = useState(false);

  return (
    <div id={id} className='value-wrap'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={isHovered ? hoverIcon : img} ></img>
      <h4>{text}</h4>
      <p>{description}</p>
    </div>
  )
}
