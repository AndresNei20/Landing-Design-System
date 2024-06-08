import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Quote.css';

gsap.registerPlugin(ScrollTrigger);

export const Quote = () => {
  useEffect(() => {
    const quoteText = document.querySelector('.h3-quote');
    
    gsap.to(quoteText, {
      scrollTrigger: {
        trigger: '.quote-div',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      duration: 5,
      opacity: 1,
      
    });
  }, []);

  return (
    <div className='quote-div'>
      <h3 className='h3-quote'>
        Take Your Figma Projects to the Next Level with Daviplata Brand New <span className="design-system">Design System</span>
      </h3>
    </div>
  );
};
