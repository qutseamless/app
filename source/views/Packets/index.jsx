/**
 * @module Packets component
 */
import React, { PropTypes } from 'react';
import styles from './styles';

import Box from 'grommet/components/Box';
import PacketsTable from './PacketsTable';

/**
 * @type {Function} Packets Stateless Component
 */
export function Packets (props) {
  /**
   * TODO: specify design of Packets
   * executes on render
   */
  return (
    <PacketsTable {...props} />
  );
}


/**
 * TODO: specify the component propTypes of Packets
 * Packets propTypes
 */
Packets.propTypes = {
  //
};


/**
 * default export
 */
export default Packets;
