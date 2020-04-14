import React from "react";
import avatar from "../avatar.jpg";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1)
  },
  title: {
    color: "#FFF"
  },
  subTitle: {
    color: "#DBAD4A",
    marginBottom: "3rem"
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box className="homeContainer">
      <Box className="typedContainer">
        <Grid container justify="center">
          <Avatar src={avatar} alt="Dan Sarich" className={classes.avatar} />
        </Grid>
        <Typography className={classes.title} variant="h3">
          Dan Sarich
        </Typography>
        <br />
        <Typography className={classes.subTitle} variant="h5">
          <Typed
            strings={["Web Developer", "Web Designer"]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
