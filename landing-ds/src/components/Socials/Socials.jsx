import React from 'react'
import { SocialButton } from '../SocialButton/SocialButton';
import './Socials.css';


export const Socials = () => {
  return (
    <div className='social-container'>
        <SocialButton icon="src/assets/behance.svg" link="https://www.behance.net/paolavelasquez4"></SocialButton>
        <SocialButton icon="src/assets/insta.svg" link="https://www.instagram.com/paola_andrea1320/"></SocialButton>
        <SocialButton icon="src/assets/drive.svg" link=""></SocialButton>
        <SocialButton icon="src/assets/mail.svg" link="mailto:paovelasquezd2002@gmail.com"></SocialButton>
    </div>
  )
}
