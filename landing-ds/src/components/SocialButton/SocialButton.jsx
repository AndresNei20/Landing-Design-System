import React from 'react'
import './SocialButton.css';

export const SocialButton = ({ icon, link }) => {
    const handleClick = () => {
        if (link) {
            window.location.href = link;
        }
    };
    return (
        <button
            className="button-social"
            onClick={handleClick}
        >
       <img src={icon}></img>
        </button>
    )
}




