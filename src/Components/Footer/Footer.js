import React from 'react';
import './Footer.css';

const linkedin = require('./LI-In-Bug.png');
const github = require('./github.png');

function Footer() {
    return (
        <footer>
            <a href='https://github.com/jz1611' target='_blank' rel='noopener noreferrer'>
                <img src={github} alt='github logo'/>
            </a>
            <a href='https://www.linkedin.com/in/jeff-zivkovic-34082210b/' target='_blank' rel='noopener noreferrer'>
                <img src={linkedin} alt='linkedin logo'/>
            </a>
        </footer>
    );
}

export default Footer;