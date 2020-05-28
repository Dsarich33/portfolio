import React from 'react';
import avatar from '../avatar.png';
import Typed from 'react-typed';
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
        color: '#29a2ce',
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
            <div className='container'>
                <Box className='typedContainer'>
                    <Avatar src={avatar} alt='Dan Sarich' className={classes.avatar} />

                    <Typography className={classes.title} variant='h3'>
                        <Typed strings={["Hello, I'm Dan Sarich"]} typeSpeed={100} />
                    </Typography>
                    <Typography className={classes.subTitle} variant='h6'>
                        Front-End Developer & Web Designer
                    </Typography>

                    <Box className='ghLink'>
                        <IconButton className={classes.socialButton} onClick={() => window.open('https://github.com/Dsarich33')}>
                            <GitHub fontSize='inherit' />
                        </IconButton>
                        <IconButton className={classes.socialButton} onClick={() => window.open('https://www.linkedin.com/in/daniel-sarich/')}>
                            <LinkedIn fontSize='inherit' />
                        </IconButton>
                    </Box>
                </Box>
            </div>
        </>
    );
};

export default Header;
