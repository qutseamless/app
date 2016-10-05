/**
 * @module register core
 */
import { Map, fromJS } from 'immutable';



/**
 * TODO: specify the necessary initial state of register
 * @type {Map} initialState of register
 */
export const initialState = new Map();


/**
 * TODO: specify the necessary state operations of register
 * @type {Function} stateSet example operation
 */
export const registerSetField = (state, { field, val }) =>
  state.set(field, val);
