import React from 'react';
import ProjectGallery from './ProjectGallery';
import ProjectList from './ProjectList';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { GitHub, Launch } from '@material-ui/icons';
import { Parallax } from 'react-materialize';
import Navbar from './Navbar';

import 'materialize-css';

import { photos } from '../resource/photos';

const useStyles = makeStyles((theme) => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: '10px auto',
    },
    subTitle: {
        color: '#29a2ce',
        marginBottom: '3rem',
    },
    socialButton: {
        color: '#fff',
        fontSize: '36px',
        transition: 'all 250ms ease-in-out',
        '&:hover': {
            color: '#29a2ce',
        },
    },
    card: {
        backgroundColor: '#333',
        color: '#fff',
    },
    cardContainer: {
        marginTop: '20px',
    },
}));

const Projects = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Navbar />

            <Parallax
                image={<img alt='' src='/images/laptop.jpg' />}
                options={{
                    responsiveThreshold: 2,
                }}
            />

            <div className='container'>
                <div className='projectsContainer'>
                    <div className='project'>
                        <h3 className='projectTitle header'>FUNON.ROCKS</h3>
                        <p className='description'>
                            Funon.rocks is a single page web application for checking the amout of fun one would have rock climbing in a particular location.
                            <br />
                            <br />
                            Using Googles Places autocomplete for the location search & Python Open Weather Map for the weather forecast.
                            <br />
                            <br />
                            <strong>
                                <em>Front End:</em>
                            </strong>{' '}
                            JavaScript, jQuery, Material Bootstrap, SASS
                            <br />
                            <strong>
                                <em>Back End:</em>
                            </strong>{' '}
                            Python, Flask, Docker, Heroku
                        </p>
                        <div className='linksContainer'>
                            <IconButton className={classes.socialButton} onClick={() => window.open('https://github.com/Dsarich33/climbing-forecast')}>
                                <GitHub fontSize='inherit' />
                            </IconButton>
                            <IconButton className={classes.socialButton} onClick={() => window.open('https://www.funon.rocks/')}>
                                <Launch fontSize='inherit' />
                            </IconButton>
                        </div>
                    </div>
                    <div class='divider'></div>
                    <div className='project'>
                        <h3 className='projectTitle header'>DANSARICH.TECH</h3>
                        <p className='description'>
                            My Personal portfolio site, showcasing some recient projects and customers of mine.
                            <br />
                            <br />
                            <strong>
                                <em>Front End:</em>
                            </strong>{' '}
                            React, Material Design, CSS
                        </p>
                        <div className='linksContainer'>
                            <IconButton className={classes.socialButton} onClick={() => window.open('https://github.com/Dsarich33/portfolio')}>
                                <GitHub fontSize='inherit' />
                            </IconButton>
                        </div>
                    </div>
                    <div class='divider'></div>
                </div>
                <h3 className='projectTitle header'>Customers</h3>
                <ProjectList />
                <div class='divider'></div>
                <h3 className='projectTitle header'>Work Examples</h3>
                <ProjectGallery photos={photos} />
            </div>
        </React.Fragment>
    );
};

export default Projects;
