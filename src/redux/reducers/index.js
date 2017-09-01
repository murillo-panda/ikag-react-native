import { combineReducers } from 'redux';
import Login from './login-reducer';
import Establishment from './establishment-reducer';
import EstablishmentList from './establishment-list-reducer';

export default combineReducers({
  auth: Login,
  establishment: Establishment,
  establishmentList: EstablishmentList
});
