# ManagerProject-ReactRedux

 This project is a React Native project with Redux and Firebase.
1. You can login with thw firebase credentials.
2. After logging in, you can add employees.
3. You can add employees with their name, phone number and shift
4. You can edit, updat and save employees details 
5. You can also delete/fire the employee whenever you want.

#### The sole purpose of creating this app is to get familiar with How React native works.


### Create a react  native project
1. react-native init manager
2. cd into it
3. start simulator
4. start in atom
5. Install dependencies for react-redux   —npm install  - - save react-redux redux

### PROJECT STEPS:

1. Inside project directory, make a new folder called src
2. src / make App.js file as a root file.
3. set up index.ios.js
4. Make REDUCERS folder under src/ inside it make index.js file. Note: we always have to pass one reducer, we are passing dummy reducer for now.
5. Import reducers to app,js and put it inside create store also


### FOR FIREBASE AUTHENTICATION

1. Install firebase libraries, npm install - - save firebase
2. Open https://console.firebase.google.com/
3. Make new project called manager
4. Go to Authentication
5. Go to email and password and enable it
6. Go to Web setup
7. Copy the content
8. Paste this code under componentWillMount
9. Import libarary for firebase

## Synchronous and Async Action Creators

we will use — 
Redux thunk to create asynchronous action creators
— it will handle any type of async, any type of AJAX REQUESTS

npm install - - save redux-thunk

### Redux thunk

1. Inside app.js
import it ,  import ReduxThunk from 'redux-thunk’;
2. Import a helper also , import { createStore, applyMiddleware } from ‘redux';
3. Do this,       <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
4. Add this dispatch like so in index.js of actions

    export const loginUser = ({ email, password }) => {
      //to this after wiring ReduxThunk
      return (dispatch) => {
      //add authentication call, its a promise also
      firebase.auth().signInWithEmailAndPassword(email, password);
        .then(user => console,.log(user));
      };
    };

 #### Make a dummy user

1. Go to https://console.firebase.google.com/project/manager-9a490/authentication/users
2. Create a user as test@test.com , password: password
3. Add loginUser to import and below also to connect

#### REACT NATIVE FOR NAVIGATION

WE WILL USE:
LIBRARY - REACT-NATIVE- ROUTER-FLUX

npm install - - save react-native-router-flux@3.35.0

#### For routing. we will use SCENE

WE WILL CREATE 3 SCENE COMPONENTS

### ROUTING BETWEEN DIFF PAGES

1.make a new componENT.
2. import it into router
3. make a new scene

    <Scene key="employeeList" component={EmployeeList} title="Employees" initial />

    initial prop is used to see the scene in the first boot.

    also, it is based on order if we don’t use initial

4. Go to actions/index.js
5. import import { Actions } from 'react-native-router-flux’;
6. Put the helper method inside loginUserSuccess like this:

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.employeeList();
};

7. when you boot the app, after login it will redirect to employees list page

#### we need Firebase to store data

go to https://console.firebase.google.com/project/manager-9a490/database/data

you will see something like this

manager-9a490: 

RAW JSON

BLUE BOX IS FIREBASE


##### install helper method called loadash

npm install —save lodash

#### Go to npmjs.com for installing all the packages

react-native-communications
(for texting)

npm install - - save react-native-communications

React native ‘Modal’ is like pop up










