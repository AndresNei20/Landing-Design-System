import React from 'react';
import './SocialButton.css';

export const SocialButton = ({ icon, link }) => {
    const handleClick = () => {
        if (link) {
            window.open(link, '_blank');
        }
    };

    return (
        <button
            className="button-social"
            onClick={handleClick}
        >
            <img src={icon} alt="Social Icon" />
        </button>
    );
};