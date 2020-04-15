import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { AppBar, Toolbar, ListItem, IconButton, ListItemText, ListItemIcon, Avatar, Divider, List, Typography, Box } from '@material-ui/core';
import { Menu, AssignmentInd, Home, Apps, ContactMail } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import avatar from '../avatar.png';

const useStyles = makeStyles((theme) => ({
    menuSliderContainer: {
        width: 250,
        background: '#1B120F',
        height: '100%',
    },
    avatar: {
        display: 'block',
        margin: '0.5rem auto',
        width: theme.spacing(13),
        height: theme.spacing(13),
    },
    listItem: {
        color: '#DBAD4A',
        textDecoration: 'none',
    },
}));
const menuItems = [
    {
        listIcon: <Home />,
        listText: 'Home',
        listPath: '/',
    },
    {
        listIcon: <AssignmentInd />,
        listText: 'Resume',
        listPath: '/resume',
    },
    {
        listIcon: <Apps />,
        listText: 'Portfolio',
        listPath: '/',
    },
    {
        listIcon: <ContactMail />,
        listText: 'Contact',
        listPath: '/',
    },
];

const Navbar = (props) => {
    const classes = useStyles();
    const [state, setState] = useState({
        right: false,
    });

    const toggleSlider = (slider, open) => () => {
        setState({ ...state, [slider]: open });
    };

    const sideList = (slider) => (
        <Box component='div' className={classes.menuSliderContainer} onClick={toggleSlider(slider, false)}>
            <Avatar src={avatar} alt='Dan Sarich' className={classes.avatar} />
            <Divider />
            <List>
                {menuItems.map((lsItem, key) => (
                    <ListItem button key={key}>
                        <ListItemIcon className={classes.listItem}>{lsItem.listIcon}</ListItemIcon>
                        <ListItemText className={classes.listItem}>
                            <Link className={classes.listItem} to={lsItem.listPath}>
                                {lsItem.listText}
                            </Link>
                        </ListItemText>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <Box component='nav'>
                <AppBar style={{ background: '#1B120F' }}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider('left', true)}>
                            <Menu style={{ color: '#DBAD4A' }} />
                        </IconButton>
                        <Typography variant='h5' style={{ color: '#fff' }}>
                            Portfolio
                        </Typography>
                        <Drawer open={state.left} anchor='left' onClose={toggleSlider('left', false)}>
                            {sideList('left')}
                        </Drawer>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
};

export default Navbar;
