import {
  SAVE_ESTABLISHMENT_IN_STORE,
} from '../actions/types';

const INITIAL_STATE = {
  payload: {
    name: '',
    address: '',
    phoneNumber: ''
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_ESTABLISHMENT_IN_STORE:
      return { ...state, payload: action.payload };
    default:
      return state;
  }
};
