import React from 'react';
import {AppBar, Toolbar, Typography, IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {withStyles} from '@material-ui/core/styles';
import {NavBarStyles} from './Styles';

const styles = NavBarStyles;

class NavBar extends React.Component{
  render(){
    const {classes}=this.props
    return(
      <React.Fragment>
        <AppBar className={classes.appbar} color='default'>
          <Toolbar>
            <IconButton 
              color='inherit' 
              aria-label='Menu' 
              className={classes.menuicon}>
              <MenuIcon />
            </IconButton>
            <Typography
              variant='title'
              color='inherit'
              className={classes.title}>
              visa
            </Typography>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(NavBar);