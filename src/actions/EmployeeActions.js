// firebase for data storage
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE
} from './types';


//aCTION createR
export const employeeUpdate = ({ prop,  value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .push({ name, phone, shift })
    .then(() => {
      dispatch({ type: EMPLOYEE_CREATE });
      Actions.employeeList({ type: 'reset' });
    });
  };
};


//save something to firebase, import firebase
//find a key user,find a key ID, FIND A KEY OF EMPLOYEES
//used string interpolation es6
//used back tick
//removed back button for us
