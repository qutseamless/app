/**
 * @module Menu component
 */
import React, { PropTypes } from 'react';

import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
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
  const { user: { signedIn } } = props;

  const menu = signedIn? <UserMenu /> : <DefaultMenu />
  /**
   * executes on render
   */
  return (
    <Sidebar size="small" colorIndex="grey-1" fixed>
      <Header pad="medium" justify="between">
        <Title>Welcome</Title>
        <Close onClick={f => f} />
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
  user: PropTypes.object,
};


/**
 * default export
 */
export default Menu;
