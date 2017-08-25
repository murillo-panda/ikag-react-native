import {
  SAVE_ESTABLISHMENT_IN_STORE,
} from './types';

export const saveEstablishmentInStore = (establishment) => {
  console.log('establishment in action', establishment)
  return (dispatch) => {
    dispatch({
      type: SAVE_ESTABLISHMENT_IN_STORE,
      payload: establishment
    });
  };
};
