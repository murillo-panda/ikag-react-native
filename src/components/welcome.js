import React, { Component } from 'react';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { Text } from 'react-native';
import { Card, CardSection, Button } from './common';

export default class Welcome extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
    };
  }

  componentWillMount() {
    const { currentUser } = firebase.auth();
    this.setState({
      username: currentUser.email
    });
  }

  onButtonLog = () => {
    const { auth } = this.props;
  }

  onButtonPress() {
    Actions.photos();
  }

  render() {
    const { email } = this.props.auth.user;

    return (
      <Card>
        <CardSection>
          <Text>Bienvenido {email}, ¿ Que deseas hacer ?</Text>
        </CardSection>
        <CardSection>
          <Button onPress={() => { Actions.list(); }}>
            Ver Establecimientos Registrados
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={() => { Actions.personalData(); }}>
            Agregar un nuevo Establecimiento
          </Button>
        </CardSection>
      </Card>
    );
  }
}
