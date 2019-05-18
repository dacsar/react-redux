function toggleModal(){
  return {
    type : 'TOGGLEMODAL'
  }
};

function handleCategory(value){
  return {
    type : 'CATEGORY',
    val  : value, 
  }
};

function handleNext(){
  return {
    type : 'NEXT'
  }
};

function handleBack(){
  return {
    type : 'BACK'
  }
}

export {toggleModal, handleCategory, handleBack, handleNext};