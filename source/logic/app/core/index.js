/**
 * @module app core
 */
import { Map, fromJS } from 'immutable';



/**
 * @type {Map} initialState of app
 */
export const initialState = new Map({
  menu: true,
});


/**
 * @type {Function} putState
 */
export const putState = (state, data) => state.merge(fromJS(data));
