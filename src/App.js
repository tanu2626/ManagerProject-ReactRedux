import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
//import firebase library
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

//App Component
class App extends Component {
  componentWillMount() {
    //came from firebase web setup
    const config = {
    apiKey: "AIzaSyCpsyoPXiMgQ7mDNrc7DLmZKMSMUdHlq74",
    authDomain: "manager-9a490.firebaseapp.com",
    databaseURL: "https://manager-9a490.firebaseio.com",
    projectId: "manager-9a490",
    storageBucket: "manager-9a490.appspot.com",
    messagingSenderId: "432055477052"
  };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;

//provider tag insures that connect tags can give all access to store, redux states
// we have changed this line above and filled it with redudcer <Provider store={createStore()}>
