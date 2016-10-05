import React from 'react';

import {
  Router as ReactRouter,
  hashHistory, // TODO: swap to browserHistory
  IndexRedirect,
  Route,
} from 'react-router';

import App from './App';
import AboutUs from './AboutUs';
import Register from './Register';
import LogIn from './LogIn';
import Dashboard from './Dashboard';
import Settings from './Settings';
import Shipments from './Shipments';

/**
 * @param {Component} Router for managing the current activity
 */
export const Router = () => (
  <ReactRouter history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="AboutUs" />
      <Route path="AboutUs" component={AboutUs} />
      <Route path="Register" component={Register} />
      <Route path="LogIn" component={LogIn} />
      <Route path="Dashboard" component={Dashboard} />
      <Route path="Shipments" component={Shipments} />
      <Route path="Settings" component={Settings} />
    </Route>
  </ReactRouter>
);

export default Router;
