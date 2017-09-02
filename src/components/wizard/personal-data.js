import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, InputSingle, Button } from '../common';

export default class PersonalData extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      address: '',
      phoneNumber: ''
    };
  }

  onButtonPress = () => {
    const { name, address, phoneNumber } = this.state;
    const { establishment } = this.props;
    const payload = Object.assign(establishment.payload, { name, address, phoneNumber });
    this.props.saveEstablishmentInStore(payload);
    Actions.schedule();
  }

  render() {
    return (
      <Card>
        <CardSection>
          <InputSingle
            placeholder="Nombre:"
            value={this.state.name}
            onChangeText={value => this.setState({ name: value })}
          />
        </CardSection>
        <CardSection>
          <InputSingle
            placeholder="Direccion:"
            value={this.state.address}
            onChangeText={value => this.setState({ address: value })}
          />
        </CardSection>
        <CardSection>
          <InputSingle
            placeholder="Telefono:"
            value={this.state.phoneNumber}
            onChangeText={value => this.setState({ phoneNumber: value })}
          />
        </CardSection>
        <CardSection>
          <Button onPress={this.onButtonPress}>
            Siguiente
          </Button>
        </CardSection>
      </Card>
    );
  }
}
