import React from 'react'
import { Steps } from '../Steps/Steps';
import './HowItWorks.css';

export const HowItWorks = () => {
    return (

        <div className='howitworks-container' id='how-it-works'>
            <h2>How it Works?</h2>
            <div className='steps-wrap'>
                <Steps step="1" description="Open the Google Drive link and donwload the necessary sources (typographies, images, etc)"></Steps>
                <Steps step="2" description="Open the documentation on ZeroHeight. This documentation includes the a link to the figma library"></Steps>
                <Steps step="3" description="Explore the library and start using it. Enjoy all the sources!!! "></Steps>
            </div>
        </div>
    )
}
