/**
 * @module <%- name %> reducer
 */
import { combineReducers } from 'redux-immutable';
import user from './user/reducer';
import register from './register/reducer';

/**
 * @function the core reducer used by the application.
 */
export default combineReducers({
  user,
  register,
});
