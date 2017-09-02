import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Card, CardSection } from '../common';
import image from '../../images/ferreteriaSanDiego.jpg';

export default class EstablishmenItem extends Component {

  renderSchedules = (title, startHour, endHour) => {
    if (startHour === '') {
      return (<Text>{title}: Cerrado</Text>)
    }
    return (<Text>{title}: {startHour} - {endHour}</Text>)
  }

  renderCategories = (categories) => {
    const result = categories.filter(this.notEmpty);
    return (<Text>{result.map((text) => `- ${text} `)}</Text>)
  }

   notEmpty = (elemento) => {
    return elemento !== '';
  }

  render() {
    const { establish } = this.props;
    const { address, name, phoneNumber } = this.props.establish;
    const { headerContentStyle, imageStyle, titleTextStyle } = styles;
    return (
      <Card>
        <CardSection>
          <Image
            style={imageStyle}
            source={image}
          />
        </CardSection>
        <CardSection>
          <View style={headerContentStyle}>
            <Text style={titleTextStyle}>{name}</Text>
            <Text> </Text>
            <Text>Categorias: </Text>
            {
              (establish.categories !== undefined)
              ? this.renderCategories(establish.categories)
              : null
            }
            <Text> </Text>
            <Text>Direccion: {address}</Text>
            <Text>Telefono: {phoneNumber}</Text>
            <Text> </Text>
            <Text>Horarios </Text>
              {
                (establish.schedule !== undefined)
                ? this.renderSchedules('Lunes a Viernes: ', establish.schedule.startHour, establish.schedule.endHour)
                : null
              }
              {
                (establish.schedule !== undefined)
                ? this.renderSchedules('Sabados: ', establish.schedule.startHourSat, establish.schedule.endHourSat)
                : null
              }
              {
                (establish.schedule !== undefined)
                ? this.renderSchedules('Domingos: ', establish.schedule.startHourSun, establish.schedule.endHourSun)
                : null
              }
          </View>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  titleTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};
