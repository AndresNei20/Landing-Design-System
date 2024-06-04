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
      <Card img="https://i.ibb.co/THKMqLj/icons1.png" hoverImg="https://i.ibb.co/1bqrXZy/icons1-2.png" text="Our Values" description="Join us and benefit from our commitment to these principles, driving your success and satisfaction" />
      <Card img="https://i.ibb.co/rmpBxLQ/icons2-2.png" hoverImg="https://i.ibb.co/MZSfgyp/icons2.png" text="Design System" description="Inspired by the renowned Daviplata digital wallet, crafted to elevate your user experience and drive innovation" />
      <Card img="https://i.postimg.cc/Jz7F3t12/iconscard3.png" hoverImg="https://i.postimg.cc/YCXsdk0q/iconcard3-hover.png" text="Easy to Use" description="Unlock the potential of your design effortlessly, enhancing your creative vision with just a few clicks" />
    </div>
  );
};