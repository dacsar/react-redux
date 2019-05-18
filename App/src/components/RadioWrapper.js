import React from 'react';
import {Radio, Grid, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {QxStyles} from './Styles';

const styles = QxStyles;

class RadioWrapper extends React.Component{
  render(){
    const {classes} = this.props;
    return(
      <Grid container item
        alignItems='center'>
        <Grid item>
          <Radio
            checked={this.props.qx === this.props.val}
            onChange={this.props.func}
            value={this.props.val}/>
        </Grid>
        <Grid item>
          <Typography className={classes.radiotext}>{this.props.text1}</Typography>
          <Typography className={classes.radiotext}>{this.props.text2}</Typography>
          <Typography className={classes.radiotext}>{this.props.text3}</Typography>
          <Typography className={classes.radiotext}>{this.props.text4}</Typography>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(RadioWrapper);