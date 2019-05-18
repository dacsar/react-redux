import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {HeaderStyles} from './Styles';

const styles = HeaderStyles;

class Header extends React.Component{
  render(){
    const {classes} = this.props;
    return(
      <React.Fragment>
        <Grid className={classes.header}>
          <Typography className={classes.headertitle}>点数計算するサイトです的な文章＆背景</Typography>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Header);
