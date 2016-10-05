/**
 * @module seamless/user
 */
import { post } from '../../request';
import { api } from '../';

const endpoint = `${api}/register`;


/**
 * creates a user with seamless
 * @param {Object} data of the user.
 */
export function register(data) {
  return post(endpoint, data)
}
