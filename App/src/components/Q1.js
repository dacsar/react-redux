import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import {QxStyles} from './Styles';
import QxTitle from './QxTitle';
import RadioWrapper from './RadioWrapper';

const styles = QxStyles

class Q1 extends React.Component{
  constructor(props){
    super(props);
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange(event){
    this.props.func('q1', event);
  }

  render(){
    const {classes} = this.props;
    return(
      <React.Fragment>
        <QxTitle title='Q1' subtitle='Academic Background'/>
        <Grid container 
          direction='row'
          className={classes.radioswrapper}>
          <RadioWrapper 
            qx={this.props.qx}
            val='30' 
            func={this.handleChange}
            text1="Holder of doctor's degree (excluding professinal degree)" />
          <RadioWrapper 
            qx={this.props.qx}
            val='20' 
            func={this.handleChange}
            text1="Holder of master's degree (including professinal degree)" />
          <RadioWrapper 
            qx={this.props.qx}
            val='10' 
            func={this.handleChange}
            text1="Holder of bachelor's degree or acquisition of education equivalent thereto"
            text2="(excluding holders of a doctor's degree or master's degree)" />
          <RadioWrapper 
            qx={this.props.qx}
            val='5' 
            func={this.handleChange}
            text1="Holder of doctor's degrees, master's degree's or "
            text2='professional degrees in multiple areas' />
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

export default withStyles(styles)(Q1);