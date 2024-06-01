import React from 'react'
import './Steps.css';

export const Steps = ({step,description}) => {
    return (

        <div className='steps-container'>
            <p className='step-title'>{step}</p>
            <p className='step-description'>{description}</p>
        </div>
    )
}
