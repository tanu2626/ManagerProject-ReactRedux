import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';

export default combineReducers({
  // //dummy reducer
  // banana: () => []
  //make a real one noew
  auth: AuthReducer,
  employeeForm: EmployeeFormReducer
});
