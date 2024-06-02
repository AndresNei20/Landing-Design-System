import React, { useEffect, useRef } from 'react';
import { ValueCard } from '../ValueCard/ValueCard';
import './ValueCards.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ValueCards = () => {
  const cardsRef = useRef(null);

  useEffect(() => {
    gsap.from('.value-card', {
      x: -100, // Initial horizontal position off-screen to the left
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: '.v-cards-wrap',
        start: 'top 80%',
        end: 'bottom 40%',
        scrub: true, // Enable scrubbing for smoother animation
      },
    });
  }, []);

  return (
    <div className='v-cards-wrap' ref={cardsRef}>
      <ValueCard title="Target Audience" img="https://i.postimg.cc/kB4tJz0q/target.png" hoverIcon="https://i.postimg.cc/MXtQ8qr9/targethover.png" text="People who are unbanked or underbanked, a design system that helps you to improve your financial idea"></ValueCard>
      <ValueCard title="Design Tokens" img="../../../../public/tokensicon.svg" hoverIcon="../../../../public/tokensicon2.svg" text="Tokenized components with figma variables like colors, spacing and typography"></ValueCard>
      <ValueCard title="Dark Mode" img="../../../../public/moonicon.svg" hoverIcon="../../../../public/moonicon2.svg" text="Enable dark mode with a single click, enable to use our components on different modes"></ValueCard>
      <ValueCard title="Personality" img="https://i.postimg.cc/G4T8YY3f/Outline-1.png" hoverIcon="https://i.postimg.cc/VdV0d4wM/Outline.png" text="Friendly finance assistant, ideal if your looking more than the usual components"></ValueCard>
      <ValueCard title="New Styles" img="../../../../public/staricon.svg" hoverIcon="../../../../public/staricon2.svg" text="New look to the famous Daviplata app, a different idea which make a new identity "></ValueCard>
      <ValueCard title="Simplified Tasks" img="../../../../public/removeicon.svg" hoverIcon="../../../../public/removeicon2.svg" text="Ideal for all type of desings, not just for one area. You can match it with all!"></ValueCard>
    </div>
  )
}
