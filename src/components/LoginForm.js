import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

// password auth
  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  //add a helper method

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  render() {
    return (
     <Card>
       <CardSection>
         <Input
           label="Email"
           placeholder="email@gmail.com"
           onChangeText={this.onEmailChange.bind(this)}
           value={this.props.email}
         />
       </CardSection>

       <CardSection>
         <Input
           secureTextEntry
           label="Password"
           placeholder="password"
           onChangeText={this.onPasswordChange.bind(this)}
           value={this.props.password}
         />
       </CardSection>

       <Text style={styles.errorTextStyle}>
         {this.props.error}
       </Text>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

// doing for password auth onChangeText thingy
//everything for auth
//onButtonPress is a helper method

const mapStateToProps = ({ auth }) => {
  const { email, password, error } = auth;

  return { email, password, error };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
 })(LoginForm);
