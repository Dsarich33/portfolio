import React from 'react';
import avatar from '../avatar.png';
import Typed from 'react-typed';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { Typography, Avatar, Box } from '@material-ui/core';
import { GitHub, LinkedIn } from '@material-ui/icons';
import { motion } from 'framer-motion';
import { ParallaxBanner } from 'react-scroll-parallax';

const useStyles = makeStyles((theme) => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1),
    },
    subTitle: {
        color: '#fff',
        marginBottom: '3rem',
    },
    typedContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100vw',
        textAlign: 'center',
        zIndex: 1,
    },
    ghButton: {
        marginRight: '10px',
        color: '#fff',
    },
    linkedInButton: {
        color: '#fff',
    },
}));

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delay: 0.3,
            when: 'beforeChildren',
            staggerChildren: 0.1,
        },
    },
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
};

const Header = () => {
    const classes = useStyles();
    return (
        <ParallaxBanner
            layers={[
                {
                    image: 'stars.svg',
                    amount: 0.2,
                },
            ]}
            style={{
                height: '100vh',
            }}
        >
            <motion.div className='homeContainer' variants={container} initial='hidden' animate='visible'>
                <Box className='typedContainer'>
                    <motion.div key='0' variants={item} className='avatarContainer'>
                        <Avatar src={avatar} alt='Dan Sarich' className={classes.avatar} />
                    </motion.div>

                    <motion.div key='1' variants={item}>
                        <Typography className={classes.subTitle} variant='h3'>
                            <Typed strings={["Hello, I'm Dan Sarich"]} typeSpeed={100} />
                        </Typography>
                    </motion.div>
                    <motion.div key='2' variants={item}>
                        <Typography className={classes.subTitle} variant='h5'>
                            Front End Web Developer & Designer for V.A.I. with an emphasis on JavaScript/jQuery, CSS, HTML, JSP/Java.
                            <br />
                            Focusing on development and integration with modern technologies such as React, Vue.js, Node & SASS.
                        </Typography>
                    </motion.div>

                    <Box className='ghLink'>
                        <motion.span key='3' variants={item}>
                            <IconButton className={classes.ghButton} onClick={() => window.open('https://github.com/Dsarich33')}>
                                <GitHub />
                            </IconButton>
                        </motion.span>
                        <motion.span key='4' variants={item}>
                            <IconButton className={classes.linkedInButton} onClick={() => window.open('https://www.linkedin.com/in/daniel-sarich/')}>
                                <LinkedIn />
                            </IconButton>
                        </motion.span>
                    </Box>
                </Box>
            </motion.div>
        </ParallaxBanner>
    );
};

export default Header;
