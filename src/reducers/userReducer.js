const INITIAL_STATE = {
  userData: {name: '', number: '', emailId: '', country: 'India', stateAddress: ''}
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SUBMIT_PERSONAL_DATA': {
      return {
        ...state, userData: action.payload
      }
    }

    default: return state;
  }
}

export default userReducer;