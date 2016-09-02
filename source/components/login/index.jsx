import React, { PropTypes, PureComponent } from 'react';

import { Card, Logo } from '../shared';

import './styles.scss';

export class LoginCompoent extends PureComponent {
  constructor(props) {
    super(props);
    this.updateField = this.updateField.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      email: '',
      password: '',
    };
  }

  updateField(field, value) {
    this.setState({ [field]: value });
  }

  submitForm(event) {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.login(email, password);
  }

  render() {
    const { email, password } = this.state;

    return (
      <div className="Login">
        <Card>
          <form className="Login__form" onSubmit={event => this.submitForm(event)}>

            {/* seamless logo */}
            <Logo className="Login__logo" />

            {/* user tip */}
            <p className="Login__info">
              Sign In to track your shipments.
            </p>

            {/* email field */}
            <input
              className="Login__input" type="email" placeholder="Email"
              onChange={event => this.updateField('email', event.target.value)}
              value={email}
            />

            {/* password field */}
            <input
              className="Login__input" type="password" placeholder="Password"
              onChange={event => this.updateField('password', event.target.value)}
              value={password}
            />

            {/* submit button */}
            <button className="Login__submit" type="submit">
              <p>LOG IN</p>
            </button>
          </form>
        </Card>
      </div>
    );
  }
}


LoginCompoent.propTypes = {
  login: PropTypes.func,
};


export default LoginCompoent;
