/**
 * @module Link component
 */
import React, { PropTypes } from 'react';
import { Link as RouterLink } from 'react-router';
import styles from './styles';


/**
 * @type {Function} Link Stateless Component
 */
export function Link (props) {
  const { className, ...rest } = props;
  /**
   * executes on render
   */
  return (
    <RouterLink className={`${className} ${styles.view}`} {...rest} />
  );
}


/**
 * TODO: specify the component propTypes of Link
 * Link propTypes
 */
Link.propTypes = {
  className: PropTypes.string,
};


/**
 * default export
 */
export default Link;
