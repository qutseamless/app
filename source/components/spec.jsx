/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import { App } from './';
import { Login } from './login';
import { Home } from './home';


/**  @test {App} */
describe('components: App', () => {
  it('should render <Login /> when no props.user', () => {
    const mock = mount(<Login />);
    expect(mock.find(Login)).to.have.length(1);
  });

  it('should render <Home /> when has props.user', () => {
    const props = { user: {} };
    const mock = mount(<App {...props} />);
    expect(mock.find(Home)).to.have.length(1);
  });
});


/* eslint
  no-unused-expressions: 0
  no-undef: 0
*/
