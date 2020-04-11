import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import MobileRightMenuslider from '@material-ui/core/Drawer';
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    ListItemIcon,
    Avatar,
    Divider,
    List,
    Typography,
    Box
} from "@material-ui/core";
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from "@material-ui/icons";
import avatar from '../avatar.jpg';

const useStyles = makeStyles(theme=>({
    menuSliderContainer: {
        width: 250,
        background: '#511',
        height: '100%'
    },
    avatar: {
        display: 'block',
        margin: '0.5rem auto',
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem: {
        color: "tan"
    }
}));
const menuItems = [
    {
        listIcon: <Home/>,
        listText: 'Home'
    },
    {
        listIcon: <AssignmentInd/>,
        listText: 'Resume'
    },
    {
        listIcon: <Apps/>,
        listText: 'Portfolio'
    },
    {
        listIcon: <ContactMail/>,
        listText: 'Contact'
    }
]

const Navbar = () => {
    const classes = useStyles();
    const [state, setState] = useState({
        right: false
    });

    const toggleSlider = ((slider, open) => () => {
        setState({...state,[slider]:open});
    });

    const sideList = slider => (
        <Box 
            component="div" 
            className={classes.menuSliderContainer}
            onClick={toggleSlider(slider, false)}
        >
            <Avatar src={avatar} alt="Dan Sarich" className={classes.avatar}/>
            <Divider />
            <List>
                {menuItems.map((lsItem, key)=>(
                    <ListItem button>
                        <ListItemIcon className={classes.listItem}>{lsItem.listIcon}</ListItemIcon>
                        <ListItemText className={classes.listItem} primary={lsItem.listText}></ListItemText>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
    return (
        <>
        
        <Box component="nav">
            <AppBar position="static" style={{background:"#222"}}>
                <Toolbar>
                    <IconButton onClick={toggleSlider('right', true)}>
                        <ArrowBack style={{color:"tomato"}}/>
                    </IconButton>
                    <Typography variant="h5" style={{color:"tan"}}>
                        Portfolio
                    </Typography>
                    <MobileRightMenuslider 
                        open={state.right}
                        anchor='right'
                        onClose={toggleSlider('right', false)}
                    >
                        {sideList('right')}
                    </MobileRightMenuslider>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default Navbar
