import React from 'react';
import { Socials } from '../Socials/Socials';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p>This website is created solely for academic purposes and does not involve any monetary transactions</p>
            <div className='our-social-media'>
            <Socials
                name={"Paola"}
                behance={"https://www.behance.net/paolavelasquez4"}
                instagram={"https://www.instagram.com/paola_andrea1320/"}
                drive={"https://drive.google.com/drive/folders/1XTLrpZdImVsgc1kZoVVgDMtY8N6jop86?usp=sharing"}
                mail={"mailto:paovelasquezd2002@gmail.com"}/>
            <Socials
                name={"Andrés"}
                behance={"https://www.behance.net/andres_0820"}
                instagram={"https://www.instagram.com/andresnei20/"}
                drive={"https://drive.google.com/drive/folders/1XTLrpZdImVsgc1kZoVVgDMtY8N6jop86?usp=sharing"}
                mail={"mailto:andresnei0820@gmail.com"}/>
            </div>
        </footer>
    );
}

export default Footer;
