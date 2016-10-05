/**
 * @module user actions
 */


/**
 * @type {Object} action for setting user.
 */
export const userSetState = val => ({
  type: 'USER_SET_STATE',
  data: { val },
});
