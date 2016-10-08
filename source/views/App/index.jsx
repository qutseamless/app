/**
 * @module App Component
 */
import React, { PropTypes, PureComponent, cloneElement } from 'react';
import { connect } from 'react-redux';

import Root from 'grommet/components/App';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Split from 'grommet/components/Split';
import Menu from '../Menu';

import Button from 'grommet/components/Button';
import MenuIcon from 'grommet/components/icons/base/Menu';

import * as actions from '../../logic/actions';
import styles from './styles';


/**
 * @type {PureComponent} App PureComponent
 */
export class App extends PureComponent {
  /**
   * TODO: specify initial state and bindings of App
   * executes on instantiation
   */
  constructor(props) {
    super(props)
    //
  }


  /**
   * TODO: specify setup of App
   * executes post mount
   */
  componentDidMount() {
    //
  }


  /**
   * TODO: specify cleanup of App
   * executes pre unmount
   */
  componentWillMount() {
    //
  }

  /**
   * TODO: specify design of App
   * executes on render
   */
  render() {
    const { props } = this;
    const { appShowMenu, app } = props;
    const { children, ...rest } = props;
    const { menu } = app;

    let menuView; let menuButtonView;
    if (menu) {
      menuView = <Menu {...rest} />;
    }

    return (
      <Root className={styles.root} centered={false}>
        <Split flex="right">
          {menuView}
          <Box full={true}>
            {cloneElement(children, rest)}
          </Box>
        </Split>
      </Root>
    );

  }
}


/**
 * TODO: specify the component propTypes of App
 * App propTypes
 */
App.propTypes = {
  appShowMenu: PropTypes.func,
  children: PropTypes.element,
};


/**
 * @param {Map} state of the application
 */
const props = state => state.toJS();


/**
 * default export
 */
export default connect(props, actions)(App);
