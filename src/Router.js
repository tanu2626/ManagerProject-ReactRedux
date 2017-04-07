import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
    //made two buckets we can freely navigate b/w either of them
        <Scene key="auth">
            <Scene key="login" component={LoginForm} title="Please login" />
          </Scene>

          <Scene key="main">
            <Scene key="employeeList" component={EmployeeList} title="Employees" />
          </Scene>
    </Router>
  );
};

export default RouterComponent;

//scene should have 3 types:
//key, component, title
