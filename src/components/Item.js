import React from 'react';
import { Text, View, Image } from 'react-native';
import { Card, CardSection } from '../components/common';

const Item = ({ album }) => {
  const { title, image, categories, address, phone, schedule } = album;
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
          //source={{ uri: image }}
          source = {image}
        />
      </CardSection>
      <CardSection>
        <View style={headerContentStyle}>
          <Text style={titleTextStyle}>{title}</Text>
          <Text>{categories}</Text>
          <Text>Direccion: {address}</Text>
          <Text>Telefono: {phone}</Text>
          <Text>Horarios:</Text>
          <Text>Lunes a Viernes: {this.renderSchedules(schedule.monToFri)} </Text>
          <Text>Sabados: {this.renderSchedules(schedule.saturdays)}</Text>
          <Text>Domingos: {this.renderSchedules(schedule.sundays)}</Text>
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
