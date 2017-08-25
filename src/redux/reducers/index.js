import { combineReducers } from 'redux';
import Login from './login-reducer';
import Establishment from './establishment-reducer';

export default combineReducers({
  auth: Login,
  establishment: Establishment
});
