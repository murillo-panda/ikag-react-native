import React from 'react';
import { Text, View, Image } from 'react-native';
import { Card, CardSection } from '../common';
import image from '../../images/ferreteriaSanDiego.jpg';

const Item = ({ album }) => {
  const { address, name, phoneNumber, schedule } = album;

  const {
    headerContentStyle,
    imageStyle,
    titleTextStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <Image
          style={imageStyle}
          //source={{ uri: image }}
          source={image}
        />
      </CardSection>
      <CardSection>
        <View style={headerContentStyle}>
          <Text style={titleTextStyle}>{name}</Text>
          <Text>Ferreteria</Text>
          <Text>Direccion: {address}</Text>
          <Text>Telefono: {phoneNumber}</Text>
          <Text>Horarios:</Text>
          <Text>Lunes a Viernes:
            { album.schedule !== undefined ? (` ${album.schedule.startHour} - ${album.schedule.endHour}`) : '' }
          </Text>
          <Text>Sabados: Cerrado </Text>
          <Text>Domingos: Cerrado </Text>
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
