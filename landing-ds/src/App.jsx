
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
import { Linked } from './components/Linked/Linked';
import Footer from './components/Footer/Footer';
import { Values } from './components/Values/Values';
gsap.registerPlugin(ScrollTrigger); 



function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Cards></Cards>
      <Quote></Quote>
      <Values></Values>
      <h2 className='title-benefits'> What are the Benefits?</h2>
      <ValueCards></ValueCards>
      <HowItWorks></HowItWorks>
      <Bento></Bento>
      <Video></Video>
      <Linked></Linked>
      <Footer></Footer>
    </div>
  );
}

export default App;



