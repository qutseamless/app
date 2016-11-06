/**
 * @module Packets component
 */
import React from 'react';

import PacketsMap from './PacketsMap';

/**
 * @type {Function} Packets Stateless Component
 */
export function Packets (props) {
  return (
    <PacketsMap {...props} />
  );
}


/**
 * default export
 */
export default Packets;
