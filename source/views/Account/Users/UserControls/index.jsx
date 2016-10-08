/**
 * @module UserControls Component
 */
import React, { PropTypes, PureComponent } from 'react';
import styles from './styles';

import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';

import FormField from 'grommet/components/FormField';
import Form from 'grommet/components/Form';
import Button from 'grommet/components/Button';

/**
 * @type {PureComponent} UserControls PureComponent
 */
export class UserControls extends PureComponent {
  /**
   * TODO: specify initial state and bindings of UserControls
   * executes on instantiation
   */
  constructor(props) {
    super(props)
    //
  }


  /**
   * TODO: specify setup of UserControls
   * executes post mount
   */
  componentDidMount() {
    //
  }


  /**
   * TODO: specify cleanup of UserControls
   * executes pre unmount
   */
  componentWillMount() {
    //
  }

  /**
   * TODO: specify design of UserControls
   * executes on render
   */
  render() {
    return (
      <Box colorIndex="grey-1">
        <Box pad="medium">
          <Heading tag="h3">Add a new user to the business.</Heading>
        </Box>
        <Box pad={{ horizontal: "medium" }} align="end">
          <Form>
            <FormField label="name">
              <input type="text" value={''} onChange={f => f} />
            </FormField>
            <FormField label="email">
              <input type="text" value={''} onChange={f => f} />
            </FormField>
            <FormField label="password">
              <input type="text" value={''} onChange={f => f} />
            </FormField>
          </Form>
        </Box>
        <Box direction="row" justify="end" pad="medium">
          <Button label="Create" primary onClick={f => f} />
        </Box>
      </Box>
    );
  }
}


/**
 * TODO: specify the component propTypes of UserControls
 * UserControls propTypes
 */
UserControls.propTypes = {
  //
};


/**
 * default export
 */
export default UserControls;
