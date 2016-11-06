/**
 * @module user actions
 */
import { browserHistory } from 'react-router';
import * as API from '../../../libs/seamless';

/**
 * @type {Object} action for setting user.
 */
export const userSetState = data => ({
  type: 'USER_SET_STATE', data,
});


/**
 * @type {Object} action for setting user.
 */
export const userPutState = data => ({
  type: 'USER_PUT_STATE', data,
});



/**
 * @type {Object} action for deleting user.
 */
export const userDelState = () => ({
  type: 'USER_DEL_STATE',
});


/**
 * - gets webtoken
 * - get user profile
 */
export const userLogin = form => dispatch => {
  const { email, password } = form;

  let oauth;
  API.getToken({ email, password })
  .then(response => {
    oauth = response;
    const { token } = oauth;
    return API.getMe({ token })
  })
  .then(response => {
    const signedIn = true;
    const user = response;
    dispatch(userSetState({ signedIn, oauth, ...user }));
    browserHistory.push('Dashboard');
  })
  .catch(error => {
    dispatch({ type: 'TOAST_SET_STATE' });
    /* TODO resolve this linting issue by creating a logger */
    console.log(error); /* eslint no-console: 0 */
  });
}
