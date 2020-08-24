// Dependencies
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const resume = require('./Zivkovic_Resume_Prof.pdf');

function Header() {
    return (
        <header id='page-header'>
            <div id='header-inner'>
                <nav id='header-nav-box'>
                    <ul id='header-nav-list'>
                        <li>
                            <NavLink exact to='/' className='header-nav-link'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink exact to='/contact' className='header-nav-link'>Contact</NavLink>
                        </li>
                        <li>
                            <a className='header-nav-link' href={resume} rel='noopener noreferrer' target='_blank'>Resume</a>
                        </li>
                    </ul>
                </nav>
                <h1 id='header-name'>Jeff Zivkovic</h1>
            </div>
        </header>
    );
}

export default Header;