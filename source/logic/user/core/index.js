/**
 * @module user core
 */
import { Map, fromJS } from 'immutable';



/**
 * @type {Map} initialState
 */
export const initialState = new Map();


/**
 * @type {Function} setState
 */
export const setState = data => fromJS(data);


/**
 * @type {Function} putState
 */
export const putState = (state, data) => state.merge(fromJS(data));


/**
 * @type {Function} delState
 */
export const delState = () => initialState;
