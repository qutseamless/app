/**
 * @module Header component
 */
import React, { PropTypes } from 'react';
import styles from './styles';

import GrommetHeader from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Button from 'grommet/components/Button';
import MenuIcon from 'grommet/components/icons/base/Menu';

/**
 * @type {Function} Header Stateless Component
 */
export function Header (props) {
  const { app, title, light, float, appShowMenu } = props;
  const { menu } = app;

  let menuButtonView;
  if (!menu) {
    menuButtonView = (
      <Button icon={<MenuIcon />} onClick={appShowMenu} />
    );
  }

  const colorIndex = light ? "none" : "grey-1";
  return (
    <GrommetHeader pad="medium" align="center" colorIndex={colorIndex} float={float}>
      {menuButtonView}
      <Title pad="small">
        {title}
      </Title>
    </GrommetHeader>
  );
}


/**
 * TODO: specify the component propTypes of Header
 * Header propTypes
 */
Header.propTypes = {
  appShowMenu: PropTypes.func,
  title: PropTypes.string,
  light: PropTypes.bool,
  float: PropTypes.bool,
  app: PropTypes.object
};


/**
 * default export
 */
export default Header;
