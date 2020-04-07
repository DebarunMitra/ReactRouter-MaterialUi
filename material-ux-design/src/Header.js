import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1,
  },
}));

const Header =()=>{
    const classes=useStyles();
    return (
    <AppBar position="static">
        <Toolbar>
            <Typography className={classes.typographyStyles}>
                Writers Wall
            </Typography>
            <EmojiEmotionsIcon />
        </Toolbar>
    </AppBar>
    );
}

export default Header;