import {connect} from 'react-redux';

import Content from '../components/Content';
import {toggleModal, handleCategory} from '../actions/actions';

function mapStateToProps(state){
  return state
};

function mapDispatchToProps(dispatch){
  return{
    toggleModal    : () => {dispatch(toggleModal())},
    handleCategory : () => {dispatch(handleCategory())},
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);