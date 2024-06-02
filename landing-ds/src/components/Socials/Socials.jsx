import React from 'react'
import { SocialButton } from '../SocialButton/SocialButton';
import './Socials.css';


export const Socials = () => {
  return (
    <div className='social-container'>
        <SocialButton icon="../../../../public/behance.svg" link="https://www.behance.net/paolavelasquez4"></SocialButton>
        <SocialButton icon="../../../../public/insta.svg" link="https://www.instagram.com/paola_andrea1320/"></SocialButton>
        <SocialButton icon="../../../../public/drive.svg" link=""></SocialButton>
        <SocialButton icon="../../../../public/mail.svg" link="mailto:paovelasquezd2002@gmail.com"></SocialButton>
    </div>
  )
}
