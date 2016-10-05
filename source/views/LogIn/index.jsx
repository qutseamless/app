/**
 * @module LogIn component
 */
import React, { PropTypes } from 'react';

import Box from 'grommet/components/Box';
import LoginForm from 'grommet/components/LoginForm';
import Cluster from 'grommet/components/icons/base/Cluster';

import styles from './styles';


/**
 * @type {Function} LogIn Stateless Component
 */
export function LogIn (props) {
  /**
   * TODO: specify design of LogIn
   * executes on render
   */
  return (
    <Box className={styles.view} justify="center" align="center">
      <LoginForm
        logo={<Cluster />}
        title="Seamless"
        secondaryText="Enter your username and password"
        errors={[]}
      />
    </Box>
  );
}


/**
 * TODO: specify the component propTypes of LogIn
 * LogIn propTypes
 */
LogIn.propTypes = {
  //
};


/**
 * default export
 */
export default LogIn;
