import React from 'react'
import { SocialButton } from '../SocialButton/SocialButton';
import './Socials.css';


export const Socials = () => {
  return (
    <div className='social-container'>
        <SocialButton icon="https://i.postimg.cc/SXYYp9z4/Outline.png" link="https://www.behance.net/paolavelasquez4"></SocialButton>
        <SocialButton icon="https://i.postimg.cc/ppkFQRtw/Outline-copy-2.png" link="https://www.instagram.com/paola_andrea1320/"></SocialButton>
        <SocialButton icon="https://i.postimg.cc/68m4Scqz/Outline-1.png" link="https://drive.google.com/drive/folders/1XTLrpZdImVsgc1kZoVVgDMtY8N6jop86?usp=sharing"></SocialButton>
        <SocialButton icon="https://i.postimg.cc/18tNJ2mf/Outline-copy.png" link="mailto:paovelasquezd2002@gmail.com"></SocialButton>
    </div>
  )
}
