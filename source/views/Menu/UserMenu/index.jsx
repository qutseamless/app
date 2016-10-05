/**
 * @module UserMenu component
 */
import React, { PropTypes } from 'react';
import GrommetMenu from 'grommet/components/Menu';
import Link from '../../Shared/Link';
import styles from './styles';


/**
 * @type {Function} UserMenu Stateless Component
 */
export function UserMenu (props) {
  /**
   * TODO: specify design of UserMenu
   * executes on render
   */
  return (
    <GrommetMenu primary={true}>
      <Link to="Dashboard">
        Dashboard
      </Link>
      <Link to="Shipments">
        Shipments
      </Link>
      <Link to="Settings">
        Settings
      </Link>
    </GrommetMenu>
  );
}


/**
 * TODO: specify the component propTypes of UserMenu
 * UserMenu propTypes
 */
UserMenu.propTypes = {
  //
};


/**
 * default export
 */
export default UserMenu;
