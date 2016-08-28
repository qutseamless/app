/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect, spy } from 'chai';

import { Login } from './';


/**  @test {Login} */
describe('components: Login', () => {
  let LOGIN;


  /**
   * create a clean version of component before each test.
   */
  beforeEach(() => { LOGIN = shallow(<Login />); });

  it('should have state: email and password', () => {
    expect(LOGIN.state().email).to.be.a('string');
    expect(LOGIN.state().password).to.be.a('string');
  });

  it('should have functions: updateField and submitForm', () => {
    expect(LOGIN.instance().updateField).to.be.a('function');
    expect(LOGIN.instance().submitForm).to.be.a('function');
  });

  it('should have elements: a form, email and password inputs, and submit button', () => {
    LOGIN = render(<Login />);

    expect(LOGIN.find('form')).to.have.length(1);
    expect(LOGIN.find('input[type=email]')).to.have.length(1);
    expect(LOGIN.find('input[type=password]')).to.have.length(1);
    expect(LOGIN.find('button[type=submit]')).to.have.length(1);
  });

  describe('components: Login#updateField', () => {
    it('should add a value to a field', () => {
      const [FIELD, INPUT] = ['email', 'abcdefg'];

      expect(LOGIN.state()[FIELD]).to.equal('');
      LOGIN.instance().updateField(FIELD, INPUT);
      expect(LOGIN.state()[FIELD]).to.equal(INPUT);
    });
  });

  describe('components: Login#submitForm', () => {
    it('should call event.preventDefault to stop form action', () => {
      const event = { preventDefault: spy() };
      const props = { login() {} };

      LOGIN = mount(<Login {...props} />);
      expect(event.preventDefault).to.not.have.been.called;
      LOGIN.instance().submitForm(event);
      expect(event.preventDefault).to.have.been.called.once;
    });

    it('should call the login action', () => {
      const event = { preventDefault() {} };
      const props = { login: spy() };

      LOGIN = mount(<Login {...props} />);
      expect(LOGIN.props().login).to.be.a.spy;
      LOGIN.instance().submitForm(event);
      expect(LOGIN.props().login).to.have.been.called.once;
    });
  });
});


/* eslint
  no-unused-expressions: 0
  no-undef: 0
*/
