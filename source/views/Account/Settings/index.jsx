/**
 * @module Settings Component
 */
import React, { PropTypes, PureComponent } from 'react';
import styles from './styles';

import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';
import Form from 'grommet/components/Form';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import FormField from 'grommet/components/FormField';
import Button from 'grommet/components/Button';
import CheckBox from 'grommet/components/CheckBox';

/**
 * @type {PureComponent} Settings PureComponent
 */
export class Settings extends PureComponent {
  /**
   * TODO: specify initial state and bindings of Settings
   * executes on instantiation
   */
  constructor(props) {
    super(props)
    //
  }


  /**
   * TODO: specify setup of Settings
   * executes post mount
   */
  componentDidMount() {
    //
  }


  /**
   * TODO: specify cleanup of Settings
   * executes pre unmount
   */
  componentWillMount() {
    //
  }

  /**
   * TODO: specify design of Settings
   * executes on render
   */
  render() {
    return (
      <Section>
        <section>
          <Heading tag="h2">Your Account</Heading>
          <Section>
            <Box direction="row" justify="between" align="center" pad="medium">
              <Heading tag="h3">Change Email</Heading>
              <Form>
                <FormField label="New Email">
                  <input type="text" value={''} onChange={f => f} />
                </FormField>
              </Form>
            </Box>
            <Box direction="row" justify="end" pad="medium">
              <Button label="Submit" primary onClick={f => f} />
            </Box>

            <Box direction="row" justify="between" align="center" pad="medium">
              <Heading tag="h3">Change Password</Heading>
              <Form>
                <FormField label="New Password">
                  <input type="text" value={''} onChange={f => f} />
                </FormField>
              </Form>
            </Box>
            <Box direction="row" justify="end" pad="medium">
              <Button label="Submit" primary onClick={f => f} />
            </Box>
          </Section>
        </section>

        <Section>
          <Heading tag="h2">Admin Access Control</Heading>
          <Paragraph>
            Manage the level of access you admins have to you application preferences
          </Paragraph>
          <Section direction="row" justify="between" responsive={false}>
            <Heading tag="h3">Manage Registered Devices</Heading>
            <CheckBox toggle={true} />
          </Section>
          <Section direction="row" justify="between" responsive={false}>
            <Heading tag="h3">Manage User Accounts</Heading>
            <CheckBox toggle={true} />
          </Section>
          <Section direction="row" justify="between" responsive={false}>
            <Heading tag="h3">Create Shipments</Heading>
            <CheckBox toggle={true} />
          </Section>
        </Section>
      </Section>
    );
  }
}


/**
 * TODO: specify the component propTypes of Settings
 * Settings propTypes
 */
Settings.propTypes = {
  //
};


/**
 * default export
 */
export default Settings;
