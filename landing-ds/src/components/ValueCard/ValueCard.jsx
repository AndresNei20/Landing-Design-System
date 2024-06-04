import React, { useState } from 'react'
import './ValueCard.css';

export const ValueCard = ({ title, img, hoverIcon, text, benefit}) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className='v-card-wrap'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <div className='text-icon-wrap'>
                <p className='title-vcard'>{title}</p>
                <img className='icon-vcard' src={isHovered ? hoverIcon : img} />
            </div>
            <p className='benefit-section'>{benefit}</p>
            <p className='text-vcard'>{text}</p>
        </div>
    )
}









