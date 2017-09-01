import React, { Component } from 'react';
import { Image, Alert, Text } from 'react-native';
import { Constants, BarCodeScanner, Permissions } from 'expo';
import imageUrl from '../../images/camera.png';
import { Card, CardSection, Button } from '../common';

export default class PhotoUpload extends Component {
  state = {
      hasCameraPermission: null
    };

    componentDidMount() {
      this._requestCameraPermission();
    }

    _requestCameraPermission = async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      this.setState({
        hasCameraPermission: status === 'granted',
      });
    };

    _handleBarCodeRead = data => {
      Alert.alert(
        'Scan successful!',
        JSON.stringify(data)
      );
    };
  onButtonPress = () => {
    const { payload } = this.props.establishment;
    this.props.saveEstablishment(payload);
  }

  render() {
    const { imageStyle } = styles;
    return (
      <Card>
        <CardSection>
        {this.state.hasCameraPermission === null ?
          <Text>Requesting for camera permission</Text> :
          this.state.hasCameraPermission === false ?
            <Text>Camera permission is not granted</Text> :
            <BarCodeScanner
              onBarCodeRead={this._handleBarCodeRead}
              style={{ height: 200, width: 200 }}
            />
        }
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
