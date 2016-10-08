/**
 * @module seamless/shipment
 */
import { post, get, update, del } from '../../request';

const endpoint = process.env.NODE_ENV !== 'production' ?
  'http://localhost:3000/api/shipments' : null;


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
 * get shipments from seamless.
 * @param {Object} data of the shipment.
 */
export async function getShipments(data) {
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
