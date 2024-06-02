import React, { useState } from 'react';
import './Bento.css';

export const Bento = () => {
  // State to manage the toggle
  const [isToggled, setIsToggled] = useState(false);

  // Function to handle the toggle
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  // Conditionally set the image source based on the state
  const imgSrc = isToggled ? "../../../../public/bento2.svg" : "../../../../public/bento1.svg";

  return (
    <>
      <div className='title-bento'>
        <h2>Discover What's Inside</h2>
        {/* Toggle switch */}
        <label className="switch">
          <input 
            type="checkbox" 
            checked={isToggled} 
            onChange={handleToggle} 
          />
          <span className="slider"></span>
        </label>
      </div>

      <div className='bento-wrap'>
        <img src={imgSrc} alt="Bento" />
      </div>
    </>
  );
}
