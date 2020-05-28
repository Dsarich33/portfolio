import React from 'react';
import { NavLink } from 'react-router-dom';

function MobileSideNav() {
    return (
        <>
            <ul id='slide-out' class='sidenav'>
                <li>
                    <div class='user-view'>
                        <div class='background'>
                            <img src='/images/hero.jpg' />
                        </div>
                        <a href='#user'>
                            <img class='circle' src='/android-chrome-192x192.png' />
                        </a>
                        <a href='#name'>
                            <span class='white-text name'>Dan Sarich</span>
                        </a>
                        <a href='#email'>
                            <span class='white-text email'>dsarich33@gmail.com</span>
                        </a>
                    </div>
                </li>
                <li>
                    <NavLink to='/' waves>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/about' waves>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/projects' waves>
                        Projects
                    </NavLink>
                </li>
            </ul>
        </>
    );
}

export default MobileSideNav;
