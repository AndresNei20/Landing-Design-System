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
                <ButtonLink link="https://www.figma.com/design/oIrFDetW1W0Xw37eZDcsUh/Daviplata-UI-Kit?node-id=76-156&t=39PQvnxDNgrQK9Ug-1" icon="src/assets/figma.svg" hoverIcon="src/assets/figma2.svg" text="Visit Figma File" ></ButtonLink>
                <ButtonLink link="PENDIENTE" icon="src/assets/documentation.svg" hoverIcon="src/assets/documentation2.svg" text="Read Documentation" ></ButtonLink>
                <ButtonLink link="PENDIENTE" icon="src/assets/download.svg" hoverIcon="src/assets/download2.svg" text="Download all Resources" ></ButtonLink>
            </div>
        </div>

        <img className='mockups-img' src='src/assets/mockuppages.svg'></img>
        </div>
    )
}
