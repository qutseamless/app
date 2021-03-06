/**
 * @module user reducer
 */
import * as storage from '../../libs/storage';
import * as core from './core';

/**
 * TODO: specify the necessary operations for each action of user
 * @function user reducer
 */
export default function (state = core.initialState, { type, data }) {
  let newState;
  switch (type) {
    case 'USER_PUT_STATE':
      newState = core.putState(state, data);
      break;
    case 'USER_SET_STATE':
      newState = core.setState(data);
      break;
    case 'USER_DEL_STATE':
      newState =  core.delState();
      break;
    case 'USER_LOAD_STATE':
      return core.setState(data);
    default:
      return state;
  }

  storage.set('user', newState.toJS());
  return newState;
}
