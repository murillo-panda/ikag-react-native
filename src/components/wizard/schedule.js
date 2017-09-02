import React, { Component } from 'react';
import { Text, View, Switch, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input, Button } from '../common';

export default class Schedule extends Component {
  constructor() {
    super();
    this.state = {
      startHour: '',
      endHour: '',
      isOpenOnSaturday: false,
      startHourSat: '',
      endHourSat: '',
      isOpenOnSunday: false,
      startHourSun: '',
      endHourSun: ''
    };
  }

  onButtonPress = () => {
    const { startHour, endHour, startHourSat, endHourSat, startHourSun, endHourSun } = this.state;
    const { establishment } = this.props;
    const schedule = { startHour, endHour, startHourSat, endHourSat, startHourSun, endHourSun };
    const payload = Object.assign(establishment.payload, { schedule });
    this.props.saveEstablishmentInStore(payload);
    Actions.categories();
  }

  renderSaturdays = () => {
    if (this.state.isOpenOnSaturday) {
      return (
        <View>
          <CardSection>
           <Input
             label="Inicio:"
             placeholder="09:00"
             value={this.state.startHourSat}
             onChangeText={value => this.setState({ startHourSat: value })}
           />
         </CardSection>
         <CardSection>
           <Input
             label="Fin:"
             placeholder="18:00"
             value={this.state.endHourSat}
             onChangeText={value => this.setState({ endHourSat: value })}
           />
         </CardSection>
        </ View>
      );
    }
    return null;
  }

  renderSundaysOrHolidays = () => {
    if (this.state.isOpenOnSunday) {
      return (
        <View>
          <CardSection>
            <Input
              label="Inicio:"
              placeholder="10:00"
              value={this.state.startHourSun}
              onChangeText={value => this.setState({ startHourSun: value })}
            />
          </CardSection>
          <CardSection>
            <Input
              label="Fin:"
              placeholder="13:00"
              value={this.state.endHourSun}
              onChangeText={value => this.setState({ endHourSun: value })}
            />
          </CardSection>
        </ View>
      );
    }
    return null;
  }

  render() {
    const { isOpenOnSaturday, isOpenOnSunday, startHour, endHour } = this.state;
    return (
      <ScrollView>
      <Card>
        <CardSection>
          <Text> Lunes a Viernes: </Text>
        </CardSection>
        <CardSection>
          <Input
            label="Inicio:"
            placeholder="09:00"
            value={startHour}
            onChangeText={value => this.setState({ startHour: value })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Fin:"
            placeholder="18:00"
            value={endHour}
            onChangeText={value => this.setState({ endHour: value })}
          />
        </CardSection>
        <CardSection>
          <Text> Esta abierto los sabados ? </Text>
          <Switch
            onValueChange={(value) => this.setState({ isOpenOnSaturday: value })}
            style={{ marginBottom: 10 }}
            value={isOpenOnSaturday}
          />
        </CardSection>
        {
          this.renderSaturdays()
        }
        <CardSection>
          <Text> Esta abierto domingos o feriados? </Text>
          <Switch
            onValueChange={(value) => this.setState({ isOpenOnSunday: value })}
            style={{ marginBottom: 10 }}
            value={isOpenOnSunday}
          />
        </CardSection>
        {
          this.renderSundaysOrHolidays()
        }

        <CardSection>
          <Button onPress={this.onButtonPress}>
            Siguiente
          </Button>
        </CardSection>
      </Card>
      </ScrollView>
    );
  }
}
