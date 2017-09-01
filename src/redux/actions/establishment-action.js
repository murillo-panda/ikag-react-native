import firebase from 'firebase';

import {
  SAVE_ESTABLISHMENT_IN_STORE,
  ESTABLISHMENT_FETCH_SUCCESS
} from './types';

export const saveEstablishmentInStore = (establishment) => {
  console.log('establishment in action', establishment);
  return (dispatch) => {
    dispatch({
      type: SAVE_ESTABLISHMENT_IN_STORE,
      payload: establishment
    });
  };
};

export const saveEstablishmentInFirebase = (establishment) => {
  console.log('establishment', establishment);
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/establishment`)
      .push(establishment)
      .then(() => {
        dispatch({ type: ESTABLISHMENT_FETCH_SUCCESS, payload: null });
      });
  };
};

export const establishmentFetch = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/establecimiento`)
      .on('value', snapshot => {
        dispatch({ type: ESTABLISHMENT_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};
