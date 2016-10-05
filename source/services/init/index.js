import * as storage from '../../libs/storage';
import { userSetState } from '../../logic/actions';


/**
 * handles all initialisation of the application. (currently the only task is loading persistant
 * data from storage).
 * @param {Function} dispatch of the store passed to init.
 * @returns {Promise} resolving on task completion.
 */
export function init({ dispatch }) {
  return storage.get('user')
  .then(user => {
    if (user) {
      dispatch(userSetState(user));
    }
  })
}

export default init;
