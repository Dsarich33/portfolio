import React from 'react';
import Header from './Header';
import Particles from 'react-particles-js';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    particlesCanva: {
        position: 'absolute',
    },
}));

const Home = () => {
    const classes = useStyles();
    return (
        <>
            <Header />
        </>
    );
};

export default Home;
