import {
  ESTABLISHMENT_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  payload: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ESTABLISHMENT_FETCH_SUCCESS:
     return action.payload;
    default:
      return state;
  }
};
