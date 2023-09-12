const INITIAL_STATE = {
  stepData: [{ level: "", name: "", skill: "", language: "", reason: "" }],
};

function courseReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "NEXT_STEP": {
      const oldData = state.stepData;
      oldData[action.payload.courseNo-1] = action.payload
      oldData.push({ level: "", name: "", skill: "", language: "", reason: "" })
      return { ...state, stepData: oldData };
    }
    default:
      return state;
  }
}

export default courseReducer;
