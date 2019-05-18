import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {ContentStep4Styles} from './Styles';

const styles = ContentStep4Styles;

class ConetntStep4 extends React.Component{
  render(){
    const {classes} = this.props;
    return(
      <React.Fragment>
        <Grid container
          direction='column'
          className={classes.step4wrapper}>
          <Grid container
            justify='center'
            alignContent='center'
            className={classes.step4topwrapper}>
              <Typography className={classes.subtitle}>
                information
              </Typography>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(ConetntStep4);