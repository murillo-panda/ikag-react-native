import React from 'react';
import firebase from 'firebase';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './redux/reducers';

import Router from './routes/router';

export default class Index extends React.Component {
  componentWillMount() {
  const config = {
    apiKey: 'AIzaSyD331OT5y3vfzmFQtrz_Nnoah_k1HdlChE',
    authDomain: 'form-poc.firebaseapp.com',
    databaseURL: 'https://form-poc.firebaseio.com',
    projectId: 'form-poc',
    storageBucket: 'form-poc.appspot.com',
    messagingSenderId: '195857205275'
  };
  firebase.initializeApp(config);
}
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
