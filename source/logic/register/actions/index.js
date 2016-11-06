/**
 * @module register actions
 */
 import { browserHistory } from 'react-router';
import * as API from '../../../libs/seamless';
import { userSetState } from '../../user/actions';

/**
 * set a field on the register form
 */
export const registerSetField = (field, val) => ({
  type: 'REGISTER_SET_FIELD',
  data: { field, val },
});


/**
 * clear a field on the register form
 */
export const registerClearField = field => ({
  type: 'REGISTER_SET_FIELD',
  data: { field, val: null },
});


/**
 * validates and submits form to register account
 */
export const registerAccount = form => dispatch => {
  const { name, email, businessName, address, industry, password } = form;

  let oauth;
  API.register({ name, email, businessName, address, industry, password })
  .then(response => {
    oauth = response;
    const { token } = oauth;
    return API.getMe({ token })
  })
  .then(response => {
    const signedIn = true;
    const user = response;
    dispatch(userSetState({ signedIn, oauth, ...user }));
    browserHistory.push('Shipments');
  })
  .catch(error => {
    dispatch({ type: 'TOAST_SET_STATE' });
    /* TODO resolve this linting issue by creating a logger */
    console.log(error); /* eslint no-console: 0 */
  });
}
