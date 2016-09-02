/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import { AppComponent } from './';
import { LoginComponent } from './login';
import { HomeComponent } from './home';


/**  @test {App} */
describe('components: App', () => {
  it('should render <Login /> when no props.user', () => {
    const mock = mount(<AppComponent />);
    expect(mock.find(LoginComponent)).to.have.length(1);
  });

  it('should render <Home /> when has props.user', () => {
    const props = { user: {} };
    const mock = mount(<AppComponent {...props} />);
    expect(mock.find(HomeComponent)).to.have.length(1);
  });
});


/* eslint
  no-unused-expressions: 0
  no-undef: 0
*/
