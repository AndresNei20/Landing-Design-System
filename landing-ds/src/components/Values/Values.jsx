import React from 'react';
import { Value } from '../Value/Value';
import './Values.css';


export const Values = ({}) => {
  
  return (
    <>
    <div className='value-section-container'>
      <h2>Our Values</h2>
    </div>
    <div className='values-wrap'>
    <Value id="security" img="https://i.postimg.cc/svQGYCH7/securityicon.png" hoverIcon="https://i.postimg.cc/xqFbN159/securityhover.png"text="Protect Privacy"></Value>
    <Value id="eye" img= "https://i.postimg.cc/0MVKfkqd/eyeicon.png" hoverIcon="https://i.postimg.cc/KKyTcpNL/eyehover.png" text="Transparency and Honesty"></Value>
    <Value id="light" img= "https://i.postimg.cc/T5hLNzd8/light.png" hoverIcon="https://i.postimg.cc/NL0H0H1N/lighthover.png" text="Efficiency and Discipline"></Value>
    <Value id="heart" img= "https://i.postimg.cc/5HqCX57r/hearticon.png" hoverIcon="https://i.postimg.cc/bDy2kG4w/heart-hover.png" text="Equality and Respect"></Value>
    
    </div>
    </>
    
  )
}
