/**
 * @module user core
 */
import { List, fromJS } from 'immutable';



/**
 * @type {Map} initialState
 */
export const initialState = new List();


/**
 * @type {Function} setState
 */
export const setState = data => fromJS(data);


/**
 * @type {Function} putState
 */
export const putState = (state, data) => state.concat(fromJS(data));


/**
 * @type {Function} delState
 */
export const delState = () => initialState;
