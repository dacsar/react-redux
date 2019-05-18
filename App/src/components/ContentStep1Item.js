import React from 'react';
import {Paper, Grid, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {ContentStep1Styles} from './Styles';

const styles = ContentStep1Styles;

class ContentStep1Item extends React.Component{
  constructor(props){
    super(props);
    this.checkSelecteditem1=this.checkSelecteditem1.bind(this);
    this.checkSelecteditem2=this.checkSelecteditem2.bind(this);
  };

  checkSelecteditem1(){
    return this.props.category === this.props.value? this.props.classes.selecteditem : this.props.classes.item
  };
  checkSelecteditem2(){
    return this.props.category === this.props.value? this.props.classes.selectedtitleinpaper : this.props.classes.titleinpaper
  };

  render(){
    const {classes} = this.props;
    return(
      <Paper className={this.checkSelecteditem1()} onClick={() => this.props.func()}>
        <Grid className={classes.img} style={{backgroundImage : 'url('+this.props.imgPath+')'}}></Grid>
        <Grid container
          justify='center'
          alignItems='center'
          className={classes.titleinpaperwrapper}>
          <Grid item>
            <Typography className={this.checkSelecteditem2()} align='center'>{this.props.title1}</Typography>
            <Typography className={this.checkSelecteditem2()} align='center'>{this.props.title2}</Typography>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(ContentStep1Item);