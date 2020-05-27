import React from 'react';
import avatar from '../avatar.png';
import NavBar from './Navbar';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Avatar, Box } from '@material-ui/core';

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
    container: {
        marginTop: '100px',
        position: 'relative',
        zIndex: '2',
    },
}));

const Header = () => {
    const classes = useStyles();
    return (
        <>
            <div class='hero'></div>
            <NavBar />
            <Container maxWidth='lg'>
                <Box className={classes.container}>
                    <Avatar src={avatar} alt='Dan Sarich' className={classes.avatar} />

                    <Typography className={classes.subTitle} variant='h5'>
                        Intrigue and curiosity has taken me down the tech rabbit hole beginning at a very early age. I started my first professional career in 2014 as a UI Developer / Designer, quickly i realized my aptitude for web development and took action! Through persistence and hard work i was quickly promoted to Front End Web Developer.
                        <br />
                        <br />
                        Currently a Front End Web Developer for V.A.I. with an emphasis on JavaScript/jQuery, CSS, HTML, JSP/Java. Driving development and integration with modern technologies such as Vue.js, Node & SASS.
                    </Typography>
                </Box>
            </Container>
        </>
    );
};

export default Header;
