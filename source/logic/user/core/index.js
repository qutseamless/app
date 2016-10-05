/**
 * @module user core
 */
import { Map, fromJS } from 'immutable';



/**
 * @type {Map} initialState of user
 */
export const initialState = new Map();


/**
 * @type {Function} setState sets the state of the user
 */
export const setState = ({ val }) => fromJS(val);


/**
 * @type {Function} setState sets a state fragment of the user
 */
export const setFragment = (state, { fragment, val }) => state.set(fragment, fromJS(val));


/**
 * @type {Function} setState sets a state field of the user
 */
export const setField = (state, { field, val }) => state.set(field, val);
