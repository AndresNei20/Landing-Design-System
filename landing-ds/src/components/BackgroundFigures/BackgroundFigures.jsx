import React from 'react';
import './BackgroundFigures.css';

const BackgroundFigures = () => {
  return (
    <div className="background-figures">
      <img src={`https://i.ibb.co/jWgxZVT/figure1.png`} alt="Background figure" className="figure figure-1" />
      <img src={`https://i.ibb.co/PMv7GwK/figure2.png`} alt="Background figure" className="figure figure-2" />
    </div>
  );
};

export default BackgroundFigures;