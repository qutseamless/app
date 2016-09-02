import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import * as actions from '../logic/user/actions';

import Login from './login';
import Home from './home';

import './styles.scss';

/**
 * @extends React.Component
 */
export class App extends PureComponent {
  render() {
    const { props } = this;

    return props.user ?
      <Home {...props} />
      :
      <Login {...props} />;
  }
}


/**
 * @param {Object} state - the current application state
 * @returns {Object} props - the component props
 */
const props = state => ({
  user: state.get('user'),
});


/**
 * @returns {Component} component - the redux connected version of App.
 */
export default connect(props, actions)(App);

/*
  eslint
  react/prefer-stateless-function: 0,
*/
