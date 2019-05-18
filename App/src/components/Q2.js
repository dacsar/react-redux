import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import {QxStyles} from './Styles';
import QxTitle from './QxTitle';
import RadioWrapper from './RadioWrapper';

const styles = QxStyles

class Q2 extends React.Component{
  constructor(props){
    super(props);
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange(){
    this.props.func('q2');
  }

  render(){
    const {classes} = this.props;
    return(
      <React.Fragment>
        <QxTitle title='Q2' 
          subtitle='Professsional Career(Practical Experience)'
          text1='Limited to practical experience pertainig to the work which the applicant intends to engage in'/>
        <Grid container 
          direction='row'
          className={classes.radioswrapper}>
          <RadioWrapper 
            qx={this.props.qx}
            val='15' 
            func={this.handleChange}
            text1="7 years or more" />
          <RadioWrapper 
            qx={this.props.qx}
            val='10' 
            func={this.handleChange}
            text1="5 years or more" />
          <RadioWrapper 
            qx={this.props.qx}
            val='5' 
            func={this.handleChange}
            text1="3 years or more" />
          <RadioWrapper 
            qx={this.props.qx}
            val='0' 
            func={this.handleChange}
            text1="other than that" />
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Q2);