/**
 * @module DefaultMenu component
 */
import React, { PropTypes } from 'react';
import Link from '../../Shared/Link';
import GrommetMenu from 'grommet/components/Menu';
import styles from './styles';


/**
 * @type {Function} DefaultMenu Stateless Component
 */
export function DefaultMenu (props) {
  /**
   * TODO: specify design of DefaultMenu
   * executes on render
   */
  return (
    <GrommetMenu primary={true}>
      <Link to="AboutUs">
        About Us
      </Link>
      <Link to="LogIn">
        Log In
      </Link>
      <Link to="Register">
        Register Account
      </Link>
    </GrommetMenu>
  );
}


/**
 * TODO: specify the component propTypes of DefaultMenu
 * DefaultMenu propTypes
 */
DefaultMenu.propTypes = {
  //
};


/**
 * default export
 */
export default DefaultMenu;
