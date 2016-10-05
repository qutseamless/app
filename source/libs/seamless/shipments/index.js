/**
 * @module seamless/shipment
 */
import { post, get, update, del } from '../../request';
import { api } from '../';

const endpoint = `${api}/shipment`;


/**
 * creates a shipment with seamless
 * @param {Object} data of the shipment.
 */
export async function createShipment(data) {
  // TODO: validate data of the shipment.
  try {
    return await post(endpoint, data);
  } catch (error) {
    throw new Error(error);
  }
}


/**
 * gets a shipment from seamless.
 * @param {Object} data of the shipment.
 */
export async function getShipment(data) {
  // TODO: validate data of the shipment.
  try {
    return await get(endpoint, data);
  } catch (error) {
    throw new Error(error);
  }
}


/**
* updates a shipment from seamless.
* @param {Object} data of the shipment.
 */
export async function updateShipment(data) {
  // TODO: validate data of the shipment.
  try {
    return await update(endpoint, data);
  } catch (error) {
    throw new Error(error);
  }
}


/**
* deletes a shipment from seamless.
* @param {Object} data of the shipment.
 */
export async function delShipment(data) {
  // TODO: validate data of the shipment.
  try {
    return await del(endpoint, data);
  } catch (error) {
    throw new Error(error);
  }
}
