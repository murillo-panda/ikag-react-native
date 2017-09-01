import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  SAVE_ESTABLISHMENT_IN_STORE,
  ESTABLISHMENT_FETCH_SUCCESS
} from './types';

export const saveEstablishmentInStore = (establishment) => {
  return (dispatch) => {
    dispatch({
      type: SAVE_ESTABLISHMENT_IN_STORE,
      payload: establishment
    });
  };
};

export const saveEstablishmentInFirebase = (establishment) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/establishment`)
      .push(establishment)
      .then(() => {
        dispatch({ type: ESTABLISHMENT_FETCH_SUCCESS, payload: null });
      });
      Actions.list();
  };
};

export const establishmentFetch = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/establishment`)
      .on('value', snapshot => {
        dispatch({ type: ESTABLISHMENT_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};
