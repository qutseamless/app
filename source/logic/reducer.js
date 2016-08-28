// import combineReducers from 'redux-immutable-combine-reducers';
import { Map } from 'immutable';

/**
 * @function the core reducer used by the application, comprised of all
 * activity reducers.
 */
// export default combineReducers({});
export default function (STATE = new Map()) {
  return STATE;
}
