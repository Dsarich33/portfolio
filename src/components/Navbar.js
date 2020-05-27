import React from 'react';
import Container from '@material-ui/core/Container';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className='siteNav'>
                <Container maxWidth='lg'>
                    <div className='linkContainer'>
                        <NavLink to='/' className='navLink logo'>
                            DAN SARICH <em>.tech</em>
                        </NavLink>
                        <NavLink to='/' className='navLink'>
                            Home
                        </NavLink>
                        <NavLink to='/about' className='navLink'>
                            About
                        </NavLink>
                        <NavLink to='/projects' className='navLink'>
                            Projects
                        </NavLink>
                    </div>
                </Container>
            </nav>
        </>
    );
};

export default Navbar;
