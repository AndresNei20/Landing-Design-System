import { useState } from 'react'
import React from 'react';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import './App.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import { Cards } from './components/Cards/Cards';
import { Quote } from './components/Quote/Quote';
gsap.registerPlugin(ScrollTrigger); 



function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Cards></Cards>
      <Quote></Quote>
    </div>
  );
}

export default App;



