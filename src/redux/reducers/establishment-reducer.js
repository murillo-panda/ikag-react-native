import {
  SAVE_ESTABLISHMENT_IN_STORE,
  ESTABLISHMENT_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  payload: {
    name: '',
    description: '',
    phoneNumber: '',
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_ESTABLISHMENT_IN_STORE:
      return { ...state, payload: action.payload };
    case ESTABLISHMENT_FETCH_SUCCESS:
      return action.payload;

      /*
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication Failed.', password: '', loading: false };
      */
    default:
      return state;
  }
};
