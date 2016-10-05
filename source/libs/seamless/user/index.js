/**
 * @module seamless/user
 */
import { post, get, update, del } from '../../request';
import { api } from '../';

const endpoint = `${api}/user`;


/**
 * creates a user with seamless
 * @param {Object} data of the user.
 */
export async function createUser(data) {
  // TODO: validate data of the user.
  try {
    return await post(endpoint, data);
  } catch (error) {
    throw new Error(error);
  }
}


/**
 * gets a user from seamless.
 * @param {Object} data of the user.
 */
export async function getUser(data) {
  // TODO: validate data of the user.
  try {
    return await get(endpoint, data);
  } catch (error) {
    throw new Error(error);
  }
}


/**
* updates a user from seamless.
* @param {Object} data of the user.
 */
export async function updateUser(data) {
  // TODO: validate data of the user.
  try {
    return await update(endpoint, data);
  } catch (error) {
    throw new Error(error);
  }
}


/**
* deletes a user from seamless.
* @param {Object} data of the user.
 */
export async function delUser(data) {
  // TODO: validate data of the user.
  try {
    return await del(endpoint, data);
  } catch (error) {
    throw new Error(error);
  }
}
