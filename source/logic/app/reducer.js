/**
 * @module app reducer
 */
import * as core from './core';

/**
 * TODO: specify the necessary operations for each action of app
 * @function app reducer
 */
export default function (state = core.initialState, { type, data }) {
  switch (type) {
    case 'APP_PUT_STATE':
      return core.putState(state, data);
    default:
      return state;
  }
}
