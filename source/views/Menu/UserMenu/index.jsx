/**
 * @module UserMenu component
 */
import React, { PropTypes } from 'react';
import GrommetMenu from 'grommet/components/Menu';
import Link from '../../Shared/Link';


/**
 * @type {Function} UserMenu Stateless Component
 */
export function UserMenu (props) {
  const { userDelState } = props;
  return (
    <GrommetMenu primary={true}>
      <Link to="Shipments">
        Shipments
      </Link>
      <Link to="Account">
        Account
      </Link>
      <Link onClick={userDelState} to="AboutUs">
        Log Out
      </Link>
    </GrommetMenu>
  );
}


/**
 * TODO: specify the component propTypes of UserMenu
 * UserMenu propTypes
 */
UserMenu.propTypes = {
  userDelState: PropTypes.func,
};


/**
 * default export
 */
export default UserMenu;
