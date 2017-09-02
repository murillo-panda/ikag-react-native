import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import _ from 'lodash';
import EstablishmenItem from './establishment-item';

class List extends Component {
  state = { albums: [], payload: [], result: null }

  componentWillMount() {
    this.props.establishmentFetch();
  }

  renderAlbums() {
   const establishments = _.map(this.props.establishmentList, (val, uid) => {
      return { ...val, uid };
    });

    if (establishments.length > 0) {
      return (establishments.map((item, i) => <EstablishmenItem key={i} establish={item} />));
    }
  }

  render() {
    return (
      <ScrollView>
      {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default List;
