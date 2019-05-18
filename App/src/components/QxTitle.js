import React from'react';
import {Paper, Grid, Typography} from '@material-ui/core/';
import {withStyles} from '@material-ui/core/styles';
import {QxStyles} from './Styles';



const styles = QxStyles;

class QxTitle extends React.Component{
  render(){
    const {classes} = this.props;
    return(
      <div>
        <Paper
          className={classes.headerwrapper}>
          <Grid container
            justify='center'
            alignItems='center'
            className={classes.headertitlewrapper}>
            <Typography variant='h4' className={classes.headertitle}>{this.props.title}</Typography>
          </Grid>
        </Paper>
        <Grid container
          className={classes.contentwrapper}
          direction='column'
          justify='center'
          alignContent='center'>
          <Typography align='center' className={classes.contentsubtitle}>
            {this.props.subtitle}
          </Typography>
          <Typography align='center' className={classes.contenttext}>
            {this.props.text1}
          </Typography>
          <Typography align='center' className={classes.contenttext}>
            {this.props.text2}
          </Typography>
          <Typography align='center' className={classes.contenttext}>
            {this.props.text3}
          </Typography>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(QxTitle);
