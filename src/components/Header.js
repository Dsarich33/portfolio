import React from 'react';
import avatar from '../avatar.png';
import Typed from 'react-typed';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { Typography, Avatar, Box } from '@material-ui/core';
import { GitHub, LinkedIn } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: '10px auto',
    },
    subTitle: {
        color: '#fff',
        marginBottom: '3rem',
    },
    title: {
        color: '#dbad4a',
        marginBottom: '1.5rem',
    },
    socialButton: {
        color: '#fff',
        fontSize: '36px',
        transition: 'all 250ms ease-in-out',
        '&:hover': {
            color: '#676767',
        },
    },
}));

const Header = () => {
    const classes = useStyles();
    return (
        <>
            <Container maxWidth='lg'>
                <Box className='typedContainer'>
                    <Avatar src={avatar} alt='Dan Sarich' className={classes.avatar} />

                    <Typography className={classes.title} variant='h3'>
                        <Typed strings={["Hello, I'm Dan Sarich"]} typeSpeed={100} />
                    </Typography>
                    <Typography className={classes.subTitle} variant='h6'>
                        Front-End Developer & Web Designer
                    </Typography>

                    {/* <Typography className={classes.subTitle} variant='h5'>
                        Intrigue and curiosity has taken me down the tech rabbit hole beginning at a very early age. I started my first professional career in 2014 as a UI Developer / Designer, quickly i realized my aptitude for web development and took action! Through persistence and hard work i was quickly promoted to Front End Web Developer.
                        <br />
                        <br />
                        Currently a Front End Web Developer for V.A.I. with an emphasis on JavaScript/jQuery, CSS, HTML, JSP/Java. Driving development and integration with modern technologies such as Vue.js, Node & SASS.
                    </Typography> */}

                    <Box className='ghLink'>
                        <IconButton className={classes.socialButton} onClick={() => window.open('https://github.com/Dsarich33')}>
                            <GitHub fontSize='inherit' />
                        </IconButton>
                        <IconButton className={classes.socialButton} onClick={() => window.open('https://www.linkedin.com/in/daniel-sarich/')}>
                            <LinkedIn fontSize='inherit' />
                        </IconButton>
                    </Box>
                </Box>
            </Container>
        </>
    );
};

export default Header;
