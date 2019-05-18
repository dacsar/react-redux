import React from 'react';
import {connect} from 'react-redux';
import {Grid, Typography, Button} from '@material-ui/core';
import {withStyles}  from '@material-ui/core/styles';
import {ContentStep1Styles} from './Styles';
import ContentStep1Item     from './ContentStep1Item';
import imgPath1 from '../img/img1.jpg';
import imgPath2 from '../img/img2.jpg';
import imgPath3 from '../img/img3.jpg';
import {handleCategory} from '../actions/actions';

const styles = ContentStep1Styles;

class ContentStep1 extends React.Component{
  render(){
    const {classes}=this.props;
    const textlist = [
      'Activities of engaging in research, research guidance or education based on a contract entered into with a public or private organization in Japan.',
      'Activities of engaging in work requiring specialized knowledge or skills in the field of natural sciences or humanities based on a contract entered into with a public or private organization in Japan.',
      'Activities of engaging in the operation or management of a public or private organization in Japan.'
    ];
    return(
      <React.Fragment>
        <Grid container 
          alignItems='center'
          className={classes.step1wrapper}>
          <Grid container item
            direction='column' 
            className={classes.step1contentwrapper}>
              <Grid container item
                justify='center'
                alignItems='center'
                className={classes.subtitlewrapper}>
                  <Typography className={classes.subtitle}>
                    Select Categories of Activities of Highly-Skilled Foreign Professionals
                  </Typography>
              </Grid>
              <Grid container item
                justify='space-around'
                alignItems='center'
                className={classes.itemswrapper}>
                  <ContentStep1Item 
                    value = '0'
                    category={this.props.category}
                    imgPath={imgPath1} 
                    title1='Advanced academic research activities' 
                    title2='「Highly-Skilled Professional(i)(a)」'
                    func={() => this.props.handleCategory0()}/>
                  <ContentStep1Item 
                    value = '1'
                    category={this.props.category}
                    imgPath={imgPath2} 
                    title1='Advanced specialized/technical activities' 
                    title2='「Highly-Skilled Professional(i)(b)」'
                    func={() => this.props.handleCategory1()}/>
                  <ContentStep1Item 
                    value = '2'
                    category={this.props.category}
                    imgPath={imgPath3} 
                    title1='Advanced business management activities' 
                    title2='「Highly-Skilled Professional(i)(c)」'
                    func={() => this.props.handleCategory2()}/>
              </Grid>
              <Grid container item
                justify='center'
                direction='column'
                className={classes.textwrapper}>
                  <Grid container
                    justify='center'
                    alignContent='center'
                    className={classes.texttopwrapper}>
                      <Typography 
                        align='center'
                        className={classes.textinbottom}>
                        {textlist[this.props.category]}
                      </Typography>
                  </Grid>
                  <Grid container
                    justify='center'
                    alignContent='center'
                    className={classes.textbottomwrapper}>
                      {this.props.category &&
                      <Button 
                        variant='outlined' 
                        color='primary' 
                        size='large'
                        className={classes.button}>
                          Details
                      </Button>}
                  </Grid>
              </Grid>
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
    handleCategory0 : () => {dispatch(handleCategory('0'))},
    handleCategory1 : () => {dispatch(handleCategory('1'))},
    handleCategory2 : () => {dispatch(handleCategory('2'))},
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ContentStep1));