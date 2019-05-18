const initialState = {
  modalFlag   : false,
  category    : '',
  activeStep  : 0,
  qx          : ['', '', '', ''],
  q5_1        : false,
  q5_2        : false,
  q5_3        : false,
  q5_4        : false,
  q4showflag4 : false,
  q4showflag5 : false,
  q4showflag6 : false,
  q4showflag7 : false,
};

export default function reducer(state = initialState, action){
  switch(action.type){
    case 'TOGGLEMODAL' : {
      return Object.assign({}, 
        state, 
        {
          modalFlag : !state.modalFlag
        });
    }
    
    case 'CATEGORY' : {
      return {category : action.val}
    }

    case 'NEXT' : {
      return Object.assign({},
        state,
        {
          activeStep : state.activeStep + 1
        });
    }

    case 'BACK' : {
      return Object.assign({},
        state,
        {
          activeStep : state.activeStep - 1
        });
    }

    default : 
      return state
  }
};