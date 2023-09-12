import { combineReducers } from 'redux';

import userReducer from './userReducer';
import courseReducer from './courseReducer';

const rootReducer = combineReducers({
  userState: userReducer,
  courseState: courseReducer,
});

export default rootReducer;