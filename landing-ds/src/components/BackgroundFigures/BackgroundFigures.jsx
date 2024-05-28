import React from 'react';
import './BackgroundFigures.css';

const BackgroundFigures = () => {
  return (
    <div className="background-figures">
      <img src={`src/assets/figure.svg`} alt="Background figure" className="figure figure-1" />
      <img src={`src/assets/figure2.svg`} alt="Background figure" className="figure figure-2" />
    </div>
  );
};

export default BackgroundFigures;