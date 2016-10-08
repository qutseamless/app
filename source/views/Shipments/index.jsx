/**
 * @module Shipments component
 */
import React, { PropTypes } from 'react';
import styles from './styles';

import ShipmentControls from './ShipmentControls';
import ShipmentsTable from './ShipmentsTable';

import Header from '../Shared/Header';
/**
 * @type {Function} Shipments Stateless Component
 */
export function Shipments (props) {
  /**
   * TODO: specify design of Shipments
   * executes on render
   */
  return (
    <div>
      <Header {...props} title="Shipments" light={true} />
      <ShipmentControls {...props} />
      <ShipmentsTable {...props} />
    </div>
  );
}


/**
 * TODO: specify the component propTypes of Shipments
 * Shipments propTypes
 */
Shipments.propTypes = {
  //
};


/**
 * default export
 */
export default Shipments;
