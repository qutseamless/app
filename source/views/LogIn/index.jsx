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
  const { userLogin } = props;

  return (
    <Box className={styles.view} justify="center" align="center">
      <LoginForm
        colorIndex="neutral-4"
        logo={<Cluster />}
        title="Seamless"
        secondaryText="Enter your username and password"
        onSubmit={({ username: email, password }) => userLogin({ email, password })}
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
  userLogin: PropTypes.func,
};


/**
 * default export
 */
export default LogIn;
