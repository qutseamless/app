/**
 * @module <%- name %> reducer
 */
import { combineReducers } from 'redux-immutable';
import shipments from './shipments/reducer';
import register from './register/reducer';
import packets from './packets/reducer';
import user from './user/reducer';
import app from './app/reducer';

/**
 * @function the core reducer used by the application.
 */
export default combineReducers({
  shipments,
  register,
  packets,
  user,
  app,
});
