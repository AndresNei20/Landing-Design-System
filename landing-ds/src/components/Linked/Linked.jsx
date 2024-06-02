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
                <ButtonLink link="https://www.figma.com/design/oIrFDetW1W0Xw37eZDcsUh/Daviplata-UI-Kit?node-id=76-156&t=39PQvnxDNgrQK9Ug-1" icon="https://i.postimg.cc/TLWVQScr/Outline.png" hoverIcon="https://i.postimg.cc/XBSwP82t/Outline-1.png" text="Visit Figma File" ></ButtonLink>
                <ButtonLink link="PENDIENTE" icon="https://i.postimg.cc/7ChMJbGt/Outline.png" hoverIcon="https://i.postimg.cc/NKpk0RMr/Outline-1.png" text="Read Documentation" ></ButtonLink>
                <ButtonLink link="PENDIENTE" icon="https://i.postimg.cc/xXTLBqRj/Outline.png" hoverIcon="https://i.postimg.cc/QHqp6ccn/Outline-1.png" text="Download all Resources" ></ButtonLink>
            </div>
        </div>

        <img className='mockups-img' src='https://i.postimg.cc/Bbw7pfJ1/mockup2.png'></img>
        </div>
    )
}
