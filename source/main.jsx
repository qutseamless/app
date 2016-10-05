import 'babel-polyfill';

import { render } from 'react-dom';
import React from 'react';

import { Provider } from 'react-redux';

import init from './services/init';
import store from './logic/store';
import Router from './views';

init(store)
.then(
  () => render(
    <Provider store={store}><Router /></Provider>,
    document.getElementById('mount')
  )
);
