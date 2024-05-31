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
      <ValueCard title="Target Audience" img="src/assets/targeticon.svg" hoverIcon="src/assets/targeticon2.svg" text="People who are unbanked or underbanked, a design system that helps you to improve your financial idea"></ValueCard>
      <ValueCard title="Design Tokens" img="src/assets/tokensicon.svg" hoverIcon="src/assets/tokensicon2.svg" text="Tokenized components with figma variables like colors, spacing and typography"></ValueCard>
      <ValueCard title="Dark Mode" img="src/assets/moonicon.svg" hoverIcon="src/assets/moonicon2.svg" text="Enable dark mode with a single click, enable to use our components on different modes"></ValueCard>
      <ValueCard title="Personality" img="src/assets/personalityicon.svg" hoverIcon="src/assets/personalityicon2.svg" text="Friendly finance assistant, ideal if your looking more than the usual components"></ValueCard>
      <ValueCard title="New Styles" img="src/assets/staricon.svg" hoverIcon="src/assets/staricon2.svg" text="New look to the famous Daviplata app, a different idea which make a new identity "></ValueCard>
      <ValueCard title="Simplified Tasks" img="src/assets/removeicon.svg" hoverIcon="src/assets/removeicon2.svg" text="Ideal for all type of desings, not just for one area. You can match it with all!"></ValueCard>
    </div>
  )
}
