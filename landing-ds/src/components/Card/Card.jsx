import React, { useState } from 'react'
import Button from '../Button/Button';
import './Card.css';


export const Card = ({ text, img, hoverImg, description, link }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
          className='card-container'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img className='image-card' src={isHovered ? hoverImg : img} alt={text} />
          <div className='info-card'>
            <h3>{text}</h3>
            <p>{description}</p>
          </div>
          <Button link={link} text="See more" primary={isHovered} />
        </div>
      );
    };
