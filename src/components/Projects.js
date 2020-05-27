import React, { useState, useCallback } from 'react';
import ProjectGallery from './ProjectGallery';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import { GitHub, LinkedIn, Launch } from '@material-ui/icons';
import Navbar from './Navbar';

import { photos } from '../resource/photos';

const useStyles = makeStyles((theme) => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: '10px auto',
    },
    subTitle: {
        color: '#dbad4a',
        marginBottom: '3rem',
    },
    socialButton: {
        color: '#fff',
        fontSize: '36px',
        transition: 'all 250ms ease-in-out',
        '&:hover': {
            color: '#dbad4a',
        },
    },
}));

const Projects = () => {
    const classes = useStyles();
    return (
        <>
            <Navbar />
            <Container maxWidth='lg'>
                <div className='projectsContainer'>
                    <div className='project'>
                        <span className='projectTitle'>Funon.rocks</span>
                        <p className='description'>
                            Funon.rocks is a single page web application for checking the amout of fun one would have rock climbing in a particular location.
                            <br />
                            Using Googles Places autocomplete for the location search & Python Open Weather Map for the weather forecast.
                            <br />
                            <br />
                            <strong>Front End:</strong> JavaScript, jQuery, Material Bootstrap, SASS
                            <br />
                            <strong>Back End:</strong> Python, Flask, Docker, Heroku
                        </p>
                        <div className='linksContainer'>
                            <IconButton className={classes.socialButton} onClick={() => window.open('https://github.com/Dsarich33/climbing-forecast')}>
                                <GitHub fontSize='inherit' />
                            </IconButton>
                            <IconButton className={classes.socialButton} onClick={() => window.open('https://www.funon.rocks/')}>
                                <Launch fontSize='inherit' />
                            </IconButton>
                        </div>
                        <ProjectGallery photos={photos} />
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Projects;
