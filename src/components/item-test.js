import React from 'react';
import { Text, View, Image } from 'react-native';
import { Card, CardSection } from '../components/common';

const Item = ({ album }) => {
  const { name, image, address, phoneNumber, startHour, endHour } = album;
  const {
    headerContentStyle,
    imageStyle,
    titleTextStyle
  } = styles;

  renderSchedules = (schedule) => {
    const { starts, ends } = schedule
    if (schedule.isOpen) {
      return (` ${starts} - ${ends}` )
    }
    else {
      return 'Cerrado'
    }
  }

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
          <Text>Supermercado</Text>
          <Text>Direccion: {address}</Text>
          <Text>Telefono: {phoneNumber}</Text>
          <Text>Horarios:</Text>
          <Text>Lunes a Viernes: {startHour} - {endHour} </Text>
          <Text>Sabados: Cerrado</Text>
          <Text>Domingos: Cerrado</Text>
        </View>
      </CardSection>
    </Card>
  );
};

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

export default Item;
