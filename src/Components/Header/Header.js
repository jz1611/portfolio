// Dependencies
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header>
            <h1 id='header-name'>Jeff Zivkovic</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink exact to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/posts'>Posts</NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/contact'>Contact</NavLink>
                    </li>
                    <li>
                        Resume
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;