import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import {QxStyles} from './Styles';
import QxTitle from './QxTitle';
import RadioWrapper2 from './RadioWrapper2';


const styles = QxStyles

class Q5 extends React.Component{
  constructor(props){
    super(props);
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange(val){
    this.props.func(val);
  }

  render(){
    const {classes} = this.props;
    return(
      <div>
        <QxTitle title='Q5'
          subtitle='Research Achivements' />
        <Grid container 
          direction='row'
          className={classes.radioswrapper}>
          <RadioWrapper2
            val={this.props.q5_1}
            func={() => this.handleChange('q5_1')}
            text1='Patent inovation 1 item or more'/>
          <RadioWrapper2
            val={this.props.q5_2}
            func={() => this.handleChange('q5_2')}
            text1='Record of engaging in research using a grnt funded'
            text2='by a public agency prior to entry into Japan 3 items or more'/>
          <RadioWrapper2
            val={this.props.q5_3}
            func={() => this.handleChange('q5_3')}
            text1='Past record of research papers (limited to those for which'
            text2='the applicant is the corresponding author), '
            text3='which appeared in an academic magazine '
            text4='registered in an academic research paper database used by '
            text5='Japanese national organizations: 3 papers or more'/>
          <RadioWrapper2
            val={this.props.q5_4}
            func={() => this.handleChange('q5_4')}
            text1='For items other than the above: in cases where the applicant submits'
            text2='a research record equivalent to the above items '
            text3=' (such as a record of winning a distinguished award),'
            text4='the Minister of Justice will determine whether to give points'
            text5='to the applicant on a case-by-case basis, after listening '
            text6='to the opinions of the heads of the relevant administrative organs'/>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Q5);