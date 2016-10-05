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
