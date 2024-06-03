import React from 'react'
import { ButtonLink } from '../ButtonLink/ButtonLink';
import './Linked.css';

export const Linked = () => {
    return (
        <div className='try-it-section'>
        <div className='text-buttons-container'>
            <div className='linked-title-container'>
                <h2>Try it Yourself for FREE</h2>
                <p>Created with love by Paola Velasquez and Andres Neira</p>
            </div>

            <div className='buttons-actions-container'>
                <ButtonLink link="https://www.figma.com/community/file/1378996455693948754/daviplata-ui-kit" icon="https://i.postimg.cc/TLWVQScr/Outline.png" hoverIcon="https://i.postimg.cc/XBSwP82t/Outline-1.png" text="Visit Figma File" ></ButtonLink>
                <ButtonLink link="https://zeroheight.com/5ccd4919c" icon="https://i.postimg.cc/7ChMJbGt/Outline.png" hoverIcon="https://i.postimg.cc/NKpk0RMr/Outline-1.png" text="Read Documentation" ></ButtonLink>
                <ButtonLink link="https://drive.google.com/drive/folders/1XTLrpZdImVsgc1kZoVVgDMtY8N6jop86?usp=sharing" icon="https://i.postimg.cc/xXTLBqRj/Outline.png" hoverIcon="https://i.postimg.cc/QHqp6ccn/Outline-1.png" text="Download Resources" ></ButtonLink>
            </div>
        </div>

        <img className='mockups-img' src='https://i.postimg.cc/Bbw7pfJ1/mockup2.png'></img>
        </div>
    )
}
