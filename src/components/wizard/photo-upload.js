import React, { Component } from 'react';
import firebase from 'firebase';
import { Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Button } from '../common';
import imageUrl from '../../images/camera.png';

export default class PhotoUpload extends Component {

  onButtonPress = () => {
    const { payload } = this.props.establishment;
    const { currentUser } = firebase.auth();
    firebase.database().ref(`/users/${currentUser.uid}/establecimiento`)
      .push({ payload })
      .then(() => {
        console.log('Insertado bien');
      });

      Actions.welcomeView();
  }

  render() {
    const { imageStyle } = styles;
    return (
      <Card>
        <CardSection>
          <Image
            style={imageStyle}
            source={imageUrl}
          />
        </CardSection>
        <CardSection>
          <Button onPress={this.onButtonPress}>
            Guardar Cambios
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};
