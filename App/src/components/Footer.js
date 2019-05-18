import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {FooterStyles} from './Styles';

const styles = FooterStyles;

class Footer extends React.Component{
  render(){
    const {classes} = this.props;
    return(
      <React.Fragment>
        <Grid container
          direction='column'
          className={classes.footerwrapper}>
          <Grid container
            justify='center'
            alignContent='center'
            className={classes.footertopwrapper}>
              <Typography className={classes.subtitle}>
                Footer
              </Typography>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Footer);