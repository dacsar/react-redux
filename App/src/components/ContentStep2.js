import React from 'react';
import {connect} from 'react-redux';
import {Button, Grid, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {ContentStep2Styles} from './Styles';
import {toggleModal} from '../actions/actions';

const styles = ContentStep2Styles;

class ContentStep2 extends React.Component{
  render(){
    const {classes} = this.props;
    return(
      <React.Fragment>
        <Grid container
          direction='column'
          className={classes.step2wrapper}>
          <Grid container
            justify='center'
            alignContent='center'
            className={classes.step2topwrapper}>
              <Typography className={classes.subtitle}>
                点数計算しよう的な文章
              </Typography>
          </Grid>
          <Grid container
            alignContent='center'
            justify='center'
            className={classes.step2bottomwrapper}>
            <Button 
              variant='contained'      
              size='large'
              onClick={() => this.props.toggleModal()}
              className={classes.button}> 
                Let's get started
            </Button>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state){
  return state
};

function mapDispatchToProps(dispatch){
  return{
    toggleModal    : () => {dispatch(toggleModal())},
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ContentStep2));