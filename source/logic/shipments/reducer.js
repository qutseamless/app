/**
 * @module shipments reducer
 */
import * as core from './core';

/**
 * TODO: specify the necessary operations for each action of shipments
 * @function shipments reducer
 */
export default function (state = core.initialState, { type, data }) {
  switch (type) {
    case 'SHIPMENTS_PUT_STATE':
      return core.putState(state, data);
    case 'SHIPMENTS_SET_STATE':
      return core.setState(data);
    case 'SHIPMENTS_DEL_STATE':
      return core.delState();
    default:
      return state;
  }
}
