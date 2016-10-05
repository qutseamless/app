/**
 * @module register actions
 */
import * as API from '../../../libs/seamless/register';

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
export const register = form => dispatch => {
  const { name, email, businessName, address, industry, password } = form;

  // TODO validate fields
  API.register({ name, email, businessName, address, industry, password })
  .then(res => {
    if (res.status === 201) {
      return res.json();
    } else {
      // TODO gracefully handle rejected calls
    }
  })
  .then(token => {
    dispatch({ type: 'USER_SET_FIELD', data: { field: 'signedIn', val: true } });
    dispatch({
      type: 'USER_SET_FRAGMENT',
      data: {
        fragment: 'profile',
        val: { name, email },
      }
    });
  });
}
