import React from 'react'
import { SocialButton } from '../SocialButton/SocialButton';
import './Socials.css';


export const Socials = ({ name, behance, instagram, drive, mail}) => {
  return (
    <div className='social-container'>
      <h3 className='h3-name'>{name}</h3>
        <SocialButton icon="https://i.postimg.cc/SXYYp9z4/Outline.png" link={behance}></SocialButton>
        <SocialButton icon="https://i.postimg.cc/ppkFQRtw/Outline-copy-2.png" link={instagram}></SocialButton>
        <SocialButton icon="https://i.postimg.cc/68m4Scqz/Outline-1.png" link={drive}></SocialButton>
        <SocialButton icon="https://i.postimg.cc/18tNJ2mf/Outline-copy.png" link={mail}></SocialButton>
    </div>
  )
}
