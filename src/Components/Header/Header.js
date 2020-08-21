// Dependencies
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header id='page-header'>
            <div id='header-inner'>
                <nav id='header-nav-box'>
                    <ul id='header-nav-list'>
                        <li className='header-nav-item-box'>
                            <NavLink exact to='/' className='header-nav-link'>Home</NavLink>
                        </li>
                        <li className='header-nav-item-box'>
                            <NavLink exact to='/contact' className='header-nav-link'>Contact</NavLink>
                        </li>
                        <li className='header-nav-item-box header-nav-link'>
                            Resume
                        </li>
                    </ul>
                </nav>
                <h1 id='header-name'>Jeff Zivkovic</h1>
            </div>
        </header>
    );
}

export default Header;