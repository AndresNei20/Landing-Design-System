import React from 'react';
import BackgroundFigures from '../BackgroundFigures/BackgroundFigures';
import Button from '../Button/Button';


import './MainContent.css';

const MainContent = () => {
  return (
    <main className="main-content">
        <BackgroundFigures></BackgroundFigures>
        <div className='title-container'>
        <div className='title-main'>
        <h1>Unlock <span className="highlight">Unprecedented</span> Design <span className="highlight-2">Efficiency</span></h1>
        <p>Introducing the Premier Figma <span className="highlight-3">Design System</span></p>
        </div>
        </div>
      
      
      <div className="buttons">
        <Button text="Visit Figma File" />
        <Button text="Access Now!" primary />
      </div>
    </main>
  );
};

export default MainContent;