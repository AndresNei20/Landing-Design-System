import React, { useState } from 'react';
import './ButtonLink.css';

export const ButtonLink = ({ icon, text, hoverIcon, link }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        window.open(link, '_blank');
    };

    return (
        <button
            className='button-link-container'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleClick}
        >
            <img className='link-icon' src={isHovered ? hoverIcon : icon} alt="Link Icon" />
            <p>{text}</p>
        </button>
    );
};
