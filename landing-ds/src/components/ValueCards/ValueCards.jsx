import React, { useEffect, useRef } from 'react';
import { ValueCard } from '../ValueCard/ValueCard';
import './ValueCards.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ValueCards = () => {
  
 
  return (
    <>
    <div className='v-cards-wrap' id='features'>
      <ValueCard title="Target Audience" benefit="Tailored for Your Needs" img="https://i.postimg.cc/kB4tJz0q/target.png" hoverIcon="https://i.postimg.cc/MXtQ8qr9/targethover.png" text="Maximize engagement with designs specifically crafted for your audience's preferences"></ValueCard>
      <ValueCard title="Design Tokens" benefit="Consistent & Efficient" img="https://i.postimg.cc/Ny1KCcH7/Tokens-1.png" hoverIcon="https://i.postimg.cc/JDMG923w/Tokens.png" text="Achieve design consistency and streamline your workflow with reusable design tokens"></ValueCard>
      <ValueCard title="Dark Mode" benefit="Modern & Eye-Friendly" img="https://i.postimg.cc/BXktq65B/Moon-1.png" hoverIcon="https://i.postimg.cc/svvvdSW2/Moon.png" text="Enhance user experience with an attractive, eye-friendly dark mode"></ValueCard>
      <ValueCard title="Personality" benefit="Unique & Memorable" img="https://i.postimg.cc/G4T8YY3f/Outline-1.png" hoverIcon="https://i.postimg.cc/VdV0d4wM/Outline.png" text="Infuse your designs with a distinct personality to make a lasting impression"></ValueCard>
      <ValueCard title="New Styles" benefit="Fresh & Innovative" img="https://i.postimg.cc/7JLbLJQm/star-1.png" hoverIcon="https://i.postimg.cc/qhwz0xQN/star.png" text="Stay ahead with cutting-edge styles that captivate and inspire"></ValueCard>
      <ValueCard title="Simplified Tasks" benefit="Easy & Productive"  img="https://i.postimg.cc/GBJpJxWX/Remove-1.png" hoverIcon="https://i.postimg.cc/TyXwD44y/Remove.png" text="Boost productivity by simplifying complex tasks, allowing you to focus on creativity"></ValueCard>
    </div>
    </>
  )
}
