/**
 * @module seamless/user
 */
import { post } from '../../request';


const endpoint = process.env.NODE_ENV !== 'production' ?
  'http://localhost:3000/api/register' : null;


/**
 * creates a user with seamless
 * @param {Object} data of the user.
 */
export function register(data) {
  return post(endpoint, data)
}
