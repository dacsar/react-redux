import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import {QxStyles} from './Styles';
import QxTitle from './QxTitle';
import RadioWrapper from './RadioWrapper';

const styles = QxStyles

class Q3 extends React.Component{
  constructor(props){
    super(props);
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange(){
    this.props.func1('q3');
    this.props.func2();
  }

  render(){
    const {classes} = this.props;
    return(
      <React.Fragment>
        <QxTitle title='Q3' 
          subtitle='Age'/>
        <Grid container
          direction='row'
          className={classes.radioswrapper}>
          <RadioWrapper
            qx={this.props.qx}
            val='15'
            func={this.handleChange}
            text1="Up to 29 years of age"/>
          <RadioWrapper
            qx={this.props.qx}
            val='10'
            func={this.handleChange}
            text1="Between 30 and 34 years of age"/>
          <RadioWrapper
            qx={this.props.qx}
            val='5'
            func={this.handleChange}
            text1="Between 35 and 39 years of age"/>
          <RadioWrapper
            qx={this.props.qx}
            val='0'
            func={this.handleChange}
            text1="other than that"/>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Q3);