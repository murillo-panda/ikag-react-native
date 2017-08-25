
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './Item';
import ferreteria from '../images/ferreteriaSanDiego.jpg';
import cotoAbasto from '../images/cotoAbasto.jpg';

class List extends Component {
  state = { albums: [], payload: [] }

  componentWillMount() {
    /*const { currentUser } = firebase.auth()

    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response =>
      {
        this.setState({ albums: response.data })
      }
    )

    firebase.database().ref(`/users/${currentUser.uid}/solicitud`)
    .on('value', snapshot => {
      let result = snapshot.val()
      //console.log(result)
      [ {{attr1:1,attr2:2},rodo123},
        {{attr1:1,attr2:2},rodo123},
        {{attr1:1,attr2:2},rodo123}
      ]
      let employees = _.map(result, (val, uid) => {
        return { ...val, uid }
      })
      console.log('employees: ', employees)
    })
    */
    let temp =
    [
      {
        "id": 1,
        "title": "Ferreteria San Diego",
        "categories": "Ferreteria",
        "address": "Rio de Janeiro 303",
        "phone": "011-223-45-983",
        "schedule":{
          "monToFri":{
            "isOpen": true,
            "starts": "09:00",
            "ends": "19:00"
          },
          "saturdays":{
            "isOpen": true,
            "starts": "09:00",
            "ends":"13:00"
          },
          "sundays":{
            "isOpen": false
          }
        },
        //"image": "https://images-na.ssl-images-amazon.com/images/I/6142Sn71ZOL._SL1000_.jpg"
        "image": ferreteria

      },
      {
        "id": 2,
        "title": "Coto Abasto",
        "categories": "Hipermercado",
        "address": "Corrientes 3534",
        "phone": "011-223-45-983",
        "schedule":{
          "monToFri":{
            "isOpen": true,
            "starts": "09:00",
            "ends": "19:00"
          },
          "saturdays":{
            "isOpen": true,
            "starts": "11:00",
            "ends":"21:30"
          },
          "sundays":{
            "isOpen": true,
            "starts": "11:00",
            "ends":"21:30"
          }
        },
        //"image": "https://images-na.ssl-images-amazon.com/images/I/6142Sn71ZOL._SL1000_.jpg"
        "image": cotoAbasto

      }
    ]

    this.setState({ payload: temp });
  }

  renderAlbums() {
    return this.state.payload.map(album =>
      <AlbumDetail key={album.id} album={album} />
    );
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
