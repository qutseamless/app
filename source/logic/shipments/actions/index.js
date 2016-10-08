/**
 * @module user actions
 */
import * as API from '../../../libs/seamless';

/**
 * @type {Object} action for setting shipments.
 */
export const shipmentsSetState = data => ({
  type: 'SHIPMENTS_SET_STATE', data,
});


/**
 * @type {Object} action for setting shipments.
 */
export const shipmentsPutState = data => ({
  type: 'SHIPMENTS_PUT_STATE', data,
});


/**
 * - gets shipments
 */
export const shipmentsGet = form => dispatch => {
  const { token } = form;

  API.getShipments({ token })
  .then(shipments => dispatch(shipmentsSetState(shipments)))
  .catch(error => {
    dispatch({ type: 'TOAST_SET_STATE' });
    /* TODO resolve this linting issue by creating a logger */
    console.log(error); /* eslint no-console: 0 */
  });
}


/**
 * - gets shipments
 */
export const shipmentCreate = form => dispatch => {
  const { deviceId, token } = form;

  API.createShipment({ deviceId, token })
  .then(shipment => dispatch(shipmentsPutState([shipment])))
  .catch(error => {
    dispatch({ type: 'TOAST_SET_STATE' });
    /* TODO resolve this linting issue by creating a logger */
    console.log(error); /* eslint no-console: 0 */
  });
}
