/**
 * @module Menu component
 */
import React, { PropTypes } from 'react';

import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Button from 'grommet/components/Button';
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import Close from 'grommet/components/icons/base/Close';

import DefaultMenu from './DefaultMenu';
import UserMenu from './UserMenu';
import styles from './styles';


/**
 * @type {Function} Menu Stateless Component
 */
export function Menu (props) {
  const { appHideMenu, user: { signedIn } } = props;

  const menu = signedIn ? <UserMenu {...props} /> : <DefaultMenu {...props} />
  /**
   * executes on render
   */
  return (
    <Sidebar size="small" colorIndex="neutral-3" fixed>
      <Header pad="medium" justify="between">
        <Title pad={{ vertical: 'small' }}>Welcome</Title>
        <Button icon={<Close />} onClick={appHideMenu} />
      </Header>

      {menu}

      <Footer pad="small">
         MIT 2016 &copy; by Leon Pearce.
      </Footer>
    </Sidebar>
  );
}


/**
 * TODO: specify the component propTypes of Menu
 * Menu propTypes
 */
Menu.propTypes = {
  appHideMenu: PropTypes.func,
  user: PropTypes.object,
};


/**
 * default export
 */
export default Menu;
