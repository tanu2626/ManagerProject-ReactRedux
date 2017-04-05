import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';

export default combineReducers({
  // //dummy reducer
  // banana: () => []
  //make a real one noew
  auth: AuthReducer
});
