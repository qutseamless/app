/**
 * @module seamless/user
 */
import { post, get, update, del } from '../../request';

const endpoint = process.env.NODE_ENV !== 'production' ?
  'http://localhost:3000/api/user' : 'http://52.63.159.167:3000/api/user';


/**
 * creates a user with seamless
 * @param {Object} data of the user.
 */
export async function createUser(data) {
  try {
    return await post(endpoint, data);
  } catch (error) {
    throw new Error(error);
  }
}


/**
 * gets current user from seamless.
 * @param {Object} data of the user.
 */
export async function getMe(data) {
  try {
    return await get(`${endpoint}/me`, data);
  } catch (error) {
    throw new Error(error);
  }
}


/**
 * gets a users from seamless.
 * @param {Object} data of the user.
 */
export async function getUsers(data) {
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
  try {
    return await del(endpoint, data);
  } catch (error) {
    throw new Error(error);
  }
}
