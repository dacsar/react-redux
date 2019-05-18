import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import {QxStyles} from './Styles';
import QxTitle from './QxTitle';
import RadioWrapper from './RadioWrapper';


const styles = QxStyles

class Q4 extends React.Component{
  constructor(props){
    super(props);
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange(){
    this.props.func('q4');
  }

  render(){
    const {classes} = this.props;
    return(
      <React.Fragment>
        <QxTitle title='Q4'
        subtitle='Annual Salary'
        text1='Annual amount of remuneration from the principal accepting organization.'
        text2='In the case of transfer from an overseas institution, including the annual amount of remuneration received from such institution.'
        text3='Bonuses are also included in the annual income.' />
        <Grid container
          direction='row'
          className={classes.radioswrapper}>
          <RadioWrapper
            qx={this.props.qx}
            val='40'
            func={this.handleChange}
            text1='10 million yen or more'/>
          <RadioWrapper
            qx={this.props.qx}
            val='35'
            func={this.handleChange}
            text1='9 to 10 million yen'/>
          <RadioWrapper
            qx={this.props.qx}
            val='30'
            func={this.handleChange}
            text1='8 to 9 million yen'/>
          {this.props.q4showflag4 &&
          <RadioWrapper
            qx={this.props.qx}
            val='25'
            func={this.handleChange}
            text1='7 to 8 million yen'/>}
          {this.props.q4showflag5 &&
          <RadioWrapper
            qx={this.props.qx}
            val='20'
            func={this.handleChange}
            text1='6 to 7 million yen'/>}
          {this.props.q4showflag6 &&
          <RadioWrapper
            qx={this.props.qx}
            val='15'
            func={this.handleChange}
            text1='5 to 6 million yen'/>}
          {this.props.q4showflag7 &&
          <RadioWrapper
            qx={this.props.qx}
            val='10'
            func={this.handleChange}
            text1='4 to 5 million yen'/>}
          <RadioWrapper
            qx={this.props.qx}
            val='0'
            func={this.handleChange}
            text1='other than more'/>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Q4);