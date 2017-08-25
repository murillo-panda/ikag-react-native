import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from '../common';

export default class Login extends Component {

   constructor() {
     super();
     this.state = {
       email: 'a@a.com',
       password: '1234567'
     };
   }

  onButtonPress = () => {
    const { email, password } = this.state;
    this.props.login({ email, password });
  }

  renderButton() {
    const { loading } = this.props.auth;
    if (loading) {
      return <Spinner size="small" />;
    }

    return (
      <Button onPress={this.onButtonPress}>
        Log in
      </Button>
    );
  }

  render() {
    const { loading , error } = this.props.auth;

    return (
      <Card>
        <CardSection>
          <Input
            placeholder="example@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {error}
        </Text>

        <CardSection>
          {this.renderButton()}
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
