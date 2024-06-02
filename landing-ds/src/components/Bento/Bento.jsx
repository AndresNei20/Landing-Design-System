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
  const imgSrc = isToggled ? "../../../../public/assets/bento2.svg" : "https://drive.google.com/file/d/1GDJhnaeXdwr4b7zx1vLSC8wPqONuVAUF/view?usp=sharing";

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
