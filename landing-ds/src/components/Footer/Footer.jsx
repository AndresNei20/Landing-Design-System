import React from 'react';
import { Socials } from '../Socials/Socials';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p>This website is created solely for academic purposes and does not involve any monetary transactions</p>
            <Socials></Socials>
        </footer>
    );
}

export default Footer;
