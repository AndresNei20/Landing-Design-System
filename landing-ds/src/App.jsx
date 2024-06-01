import { useState } from 'react'
import React from 'react';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import './App.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import { Cards } from './components/Cards/Cards';
import { Quote } from './components/Quote/Quote';
import { ValueCards } from './components/ValueCards/ValueCards';
import { HowItWorks } from './components/HowItWorks/HowItWorks';
import { Bento } from './components/Bento/Bento';
import { Video } from './components/Video/Video';
gsap.registerPlugin(ScrollTrigger); 



function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Cards></Cards>
      <Quote></Quote>
      <ValueCards></ValueCards>
      <HowItWorks></HowItWorks>
      <Bento></Bento>
      <Video></Video>
    </div>
  );
}

export default App;



