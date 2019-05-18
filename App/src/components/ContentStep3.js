import React from 'react';
import {Grid, Button, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {ContentStep3Styles} from './Styles';

const styles = ContentStep3Styles;

class ConetntStep3 extends React.Component{
  render(){
    const {classes} = this.props;
    return(
      <React.Fragment>
        <Grid container
          direction='column'
          className={classes.step3wrapper}>
          <Grid container
            justify='center'
            alignContent='center'
            className={classes.step3topwrapper}>
              <Typography className={classes.subtitle}>
                エクセルで出力しよう的な文章
              </Typography>
          </Grid>
          <Grid container
            alignContent='center'
            justify='center'
            className={classes.step3bottomwrapper}>
            <Button 
              variant='contained'      
              size='large'
              onClick={this.props.func}
              className={classes.button}> 
                start
            </Button>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(ConetntStep3);