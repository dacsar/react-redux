import React from 'react';
import {connect} from 'react-redux';
import {Modal, Grid} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import Question from './Question';
import {ContentStyles} from './Styles';
import Header from './Header'; 
import Footer from './Footer';
import ContentStep1 from './ContentStep1';
import ContentStep2 from './ContentStep2';
import ContentStep3 from './ContentStep3';
import ContentStep4 from './ContentStep4';
import {toggleModal} from '../actions/actions';



const styles = ContentStyles;

class Content extends React.Component{
  render(){
    const {classes}=this.props;
    return(
      <React.Fragment>
        <Modal open={this.props.modalFlag} onClose={this.props.toggleModal}>
          <Question />
        </Modal>
        <Grid container justify='center'>
          <Grid container 
            direction='column' 
            className={classes.contentwrapper}>
            <Header />
            <ContentStep1 />
            <ContentStep2 /> 
            <ContentStep3 />
            <ContentStep4 />
            <Footer />
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
    toggleModal    : () => {dispatch(toggleModal())},
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Content));