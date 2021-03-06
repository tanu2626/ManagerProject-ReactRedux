import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    // type: 'email_changed',
    payload: text
  };
};

//define another action creator for password

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

//async action creator

export const loginUser = ({ email, password }) => {
  //to this after wiring ReduxThunk
  return (dispatch) => {
    dispatch({ type: LOGIN_USER});

  //add authentication call, its a promise also
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch((error) => {
        console.log(error);

        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch));
      });
  };
};

//helper function to make loginUser Robust

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

// elper function to make loginUser Robust
const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
// IMPORT ACTIONS FROM ABOVE IMPORT 'react-native-router-flux';
  Actions.main();

};
