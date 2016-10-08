/**
 * @module packets actions
 */
import * as API from '../../../libs/seamless';

/**
 * @type {Object} action for setting packets.
 */
export const packetsSetState = data => ({
  type: 'PACKETS_SET_STATE', data,
});


/**
 * @type {Object} action for setting packets.
 */
export const packetsPutState = data => ({
  type: 'PACKETS_PUT_STATE', data,
});


/**
 * - gets packets
 */
export const packetsGet = form => dispatch => {
  const { token, shipmentId } = form;

  API.getPackets({ token, shipmentId })
  .then(packets => dispatch(packetsSetState(packets)))
  .catch(error => {
    dispatch({ type: 'TOAST_SET_STATE' });
    /* TODO resolve this linting issue by creating a logger */
    console.log(error); /* eslint no-console: 0 */
  });
}
