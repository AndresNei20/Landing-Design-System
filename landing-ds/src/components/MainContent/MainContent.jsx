import React from 'react';
import Button from '../Button/Button';

import './MainContent.css';

const MainContent = () => {
  return (
    <main className="main-content">
      <h1>Unlock <span className="highlight">Unprecedented</span> Design <span className="highlight">Efficiency</span></h1>
      <p>Introducing the Premier Figma Design System</p>
      <div className="buttons">
        <Button text="Visit Figma File" />
        <Button text="Access Now!" primary />
      </div>
    </main>
  );
};

export default MainContent;