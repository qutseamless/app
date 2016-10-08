/**
 * @module packets reducer
 */
import * as core from './core';

/**
 * TODO: specify the necessary operations for each action of packets
 * @function packets reducer
 */
export default function (state = core.initialState, { type, data }) {
  switch (type) {
    case 'PACKETS_PUT_STATE':
      return core.putState(state, data);
    case 'PACKETS_SET_STATE':
      return core.setState(data);
    case 'PACKETS_DEL_STATE':
      return core.delState();
    default:
      return state;
  }
}
