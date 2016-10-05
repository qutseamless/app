/**
 * @module Register component
 */
import React, { PropTypes } from 'react';
import styles from './styles';

import Box from 'grommet/components/Box';
import Section from 'grommet/components/Section';
import Header from 'grommet/components/Header';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import Button from 'grommet/components/Button';
import Footer from 'grommet/components/Footer';

/**
 * @type {Function} Register Stateless Component
 */
export function Register (props) {
  const { register, registerSetField, registerAccount } = props;
  const {
    name,
    email,
    businessName,
    address,
    industry,
    password,
  } = register;
  console.log(name);
  /**
   * executes on render
   */
  return (
    <Box align="center" basis="full" justify="center">
      <Section size="xlarge">
        <Header pad="medium">
          <h2>Register Account</h2>
        </Header>

        <Box pad="medium" size="large">
          <FormField label="Full Name">
            <input type="text" value={name || ''} onChange={event => registerSetField('name', event.target.value)} />
          </FormField>
          <FormField label="Email">
            <input type="email" value={email || ''} onChange={event => registerSetField('email', event.target.value)} />
          </FormField>
        </Box>
        <Box pad="medium" size="large">
          <FormField label="Business Name">
            <input type="text" value={businessName || ''} onChange={event => registerSetField('businessName', event.target.value)} />
          </FormField>
          <FormField label="Address">
            <input type="text" value={address || ''} onChange={event => registerSetField('address', event.target.value)} />
          </FormField>
          <FormField label="Industry">
            <input type="text" value={industry || ''} onChange={event => registerSetField('industry', event.target.value)} />
          </FormField>
        </Box>
        <Box pad="medium" size="large">
          <FormField label="Password">
            <input type="password" value={password || ''} onChange={event => registerSetField('password', event.target.value)} />
          </FormField>
        </Box>

        <Footer direction="row" reverse={true} pad="medium">
          <Button label="Sign Up" onClick={() => registerAccount(register)} primary />
        </Footer>
      </Section>
    </Box>
  );
}


/**
 * TODO: specify the component propTypes of Register
 * Register propTypes
 */
Register.propTypes = {
  registerSetField: PropTypes.func,
  registerAccount: PropTypes.func,
  register: PropTypes.object,
};


/**
 * default export
 */
export default Register;
