import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div class='navbar-fixed'>
                <nav className='siteNav'>
                    <div className='nav-wrapper container'>
                        <a href='#!' data-target='slide-out' class='sidenav-trigger show-on-med-and-down'>
                            <i class='material-icons'>menu</i>
                        </a>
                        <NavLink to='/' className='brand-logo'>
                            DS<em>.tech</em>
                        </NavLink>
                        <ul className='right hide-on-med-and-down'>
                            <li>
                                <NavLink to='/' className=''>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/about' className=''>
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/projects' className=''>
                                    Projects
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navbar;
