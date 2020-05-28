import React from 'react';
import { NavLink } from 'react-router-dom';

function MobileSideNav({ closeSideNav }) {
    return (
        <>
            <ul id='slide-out' className='sidenav'>
                <li>
                    <div className='user-view'>
                        <div className='background'>
                            <img src='/images/hero.jpg' alt='hero' />
                        </div>
                        <a href='#user'>
                            <img className='circle' src='/android-chrome-192x192.png' alt='avatar' />
                        </a>
                        <a href='#name'>
                            <span className='white-text name'>Dan Sarich</span>
                        </a>
                        <a href='#email'>
                            <span className='white-text email'>dsarich33@gmail.com</span>
                        </a>
                    </div>
                </li>
                <li>
                    <NavLink to='/' waves='true' onClick={closeSideNav}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/about' waves='true' onClick={closeSideNav}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/projects' waves='true' onClick={closeSideNav}>
                        Projects
                    </NavLink>
                </li>
            </ul>
        </>
    );
}

export default MobileSideNav;
