import React, { Component } from 'react';
import { Text, Switch } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Button } from '../common';

export default class Categories extends Component {
  state = {
    ferreteria: true,
    farmacia: false,
    supermercado: false,
    restaurant: false,
    verdureria: false,
    otros: false
  }

  onButtonPress = () => {
    const { ferreteria, farmacia, supermercado, restaurant, verdureria, otros } = this.state;
    const { establishment } = this.props;
    const categories = { ferreteria, farmacia, supermercado, restaurant, verdureria, otros };
    const payload = Object.assign(establishment.payload, { categories });
    this.props.saveEstablishmentInStore(payload);
    Actions.uploadPhotos();
  }

  render() {
    return (
      <Card>
      <CardSection>
        <Text>¿ A que tipo de categoria pertenece el establecimiento ?</Text>
      </CardSection>
        <CardSection>
          <Switch
              onValueChange={(value) => this.setState({ ferreteria: value })}
              style={{ marginBottom: 10 }}
              value={this.state.ferreteria}
          />
          <Text>Ferreteria</Text>
        </CardSection>
        <CardSection>
          <Switch
              onValueChange={(value) => this.setState({ farmacia: value })}
              style={{ marginBottom: 10 }}
              value={this.state.farmacia}
          />
          <Text>Farmacia</Text>
        </CardSection>
        <CardSection>
          <Switch
              onValueChange={(value) => this.setState({ supermercado: value })}
              style={{ marginBottom: 10 }}
              value={this.state.supermercado}
          />
          <Text>Supermercado</Text>
        </CardSection>
        <CardSection>
          <Switch
              onValueChange={(value) => this.setState({ restaurant: value })}
              style={{ marginBottom: 10 }}
              value={this.state.restaurant}
          />
          <Text>Restaurant</Text>
        </CardSection>
        <CardSection>
          <Switch
              onValueChange={(value) => this.setState({ verdureria: value })}
              style={{ marginBottom: 10 }}
              value={this.state.verdureria}
          />
          <Text>Verdureria</Text>
        </CardSection>
        <CardSection>
          <Switch
              onValueChange={(value) => this.setState({ otros: value })}
              style={{ marginBottom: 10 }}
              value={this.state.otros}
          />
          <Text>Otros</Text>
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
