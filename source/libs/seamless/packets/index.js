/**
 * @module seamless/shipment
 */
import { get } from '../../request';

const endpoint = process.env.NODE_ENV !== 'production' ?
  'http://localhost:3000/api/packets' : null;


/**
 * get packets from seamless.
 * @param {Object} data of the shipment.
 */
export async function getPackets(data) {
  // TODO: validate data of the shipment.
  try {
    return await get(endpoint, data);
  } catch (error) {
    throw new Error(error);
  }
}
