/**
 * @module register reducer
 */
import * as core from './core';

/**
 * TODO: specify the necessary operations for each action of register
 * @function register reducer
 */
export default function (state = core.initialState, { type, data }) {
  switch (type) {
    case 'REGISTER_SET_FIELD':
      return core.registerSetField(state, data);
    default:
      return state;
  }
}
