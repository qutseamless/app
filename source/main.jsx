import 'babel-polyfill';

import ReactDOM from 'react-dom';
import React from 'react';

import { Provider } from 'react-redux';
import store from './logic/store';

import AppView from './components';


ReactDOM.render(
  <Provider store={store}>
    <AppView />
  </Provider>,
  document.getElementById('app')
);
