import React, { useEffect, useRef } from 'react';
import { ValueCard } from '../ValueCard/ValueCard';
import './ValueCards.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ValueCards = () => {
  
 
  return (
    <>
    <div className='v-cards-wrap'>
      <ValueCard title="Target Audience" img="https://i.postimg.cc/kB4tJz0q/target.png" hoverIcon="https://i.postimg.cc/MXtQ8qr9/targethover.png" text="People who are unbanked or underbanked, a design system that helps you to improve your financial idea"></ValueCard>
      <ValueCard title="Design Tokens" img="https://i.postimg.cc/Ny1KCcH7/Tokens-1.png" hoverIcon="https://i.postimg.cc/JDMG923w/Tokens.png" text="Tokenized components with figma variables like colors, spacing and typography"></ValueCard>
      <ValueCard title="Dark Mode" img="https://i.postimg.cc/BXktq65B/Moon-1.png" hoverIcon="https://i.postimg.cc/svvvdSW2/Moon.png" text="Enable dark mode with a single click, enable to use our components on different modes"></ValueCard>
      <ValueCard title="Personality" img="https://i.postimg.cc/G4T8YY3f/Outline-1.png" hoverIcon="https://i.postimg.cc/VdV0d4wM/Outline.png" text="Friendly finance assistant, ideal if your looking more than the usual components"></ValueCard>
      <ValueCard title="New Styles" img="https://i.postimg.cc/7JLbLJQm/star-1.png" hoverIcon="https://i.postimg.cc/qhwz0xQN/star.png" text="New look to the famous Daviplata app, a different idea which make a new identity "></ValueCard>
      <ValueCard title="Simplified Tasks" img="https://i.postimg.cc/GBJpJxWX/Remove-1.png" hoverIcon="https://i.postimg.cc/TyXwD44y/Remove.png" text="Ideal for all type of desings, not just for one area. You can match it with all!"></ValueCard>
    </div>
    </>
  )
}
