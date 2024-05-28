import React, { useEffect } from 'react';
import { Card } from '../Card/Card';
import './Cards.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registrar ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export const Cards = () => {
  useEffect(() => {
    gsap.fromTo('.cards-container', 
      {
        opacity: 0, 
        y: 50 
      },
      {
        opacity: 1, 
        y: 0, 
        duration: 1,
        scrollTrigger: {
          trigger: '.cards-container',
          start: 'top 80%', // Iniciar la animación cuando la parte superior del contenedor esté al 80% desde la parte superior del viewport
          toggleActions: 'play none none none', // Reproducir la animación cuando entre en el viewport
        }
      }
    );
  }, []);

  return (
    <div className='cards-container'>
      <Card img="src/assets/icons1.png" hoverImg="src/assets/icons1-2.png" text="Our Values" description="Secure management of products and services, honesty, transparency, equality, respect, efficiency and discipline" />
      <Card img="src/assets/icons2.png" hoverImg="src/assets/icons2-2.png" text="Design System" description="A design system inspired by the famous digital wallet Daviplata and the desire to improve it" />
      <Card img="src/assets/icons3.png" hoverImg="src/assets/icons3-2.png" text="Easy to Use" description="Unlock the potential of your design with just a few clicks and a desire to enhance your creative vision" />
    </div>
  );
};