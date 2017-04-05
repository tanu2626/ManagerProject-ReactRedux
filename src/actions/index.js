import firebase from 'firebase';

import
  { EMAIL_CHANGED,
    PASSWORD_CHANGED
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

//async action creator try

export const loginUser = ({ email, password }) => {
  //add authentication call, its a promise also
  firebase.auth().signInWithEmailAndPassword(email, password);
    .then(user => console,.log(user));
};
