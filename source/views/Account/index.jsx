/**
 * @module Account component
 */
import React, { PropTypes } from 'react';
import styles from './styles';

import Box from 'grommet/components/Box';
import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';

import Settings from './Settings';
import Devices from './Devices';
import Users from './Users';
import Header from '../Shared/Header';

/**
 * @type {Function} Account Stateless Component
 */
export function Account (props) {
  return (
    <Box>
      <Header {...props} title="Account Control Panel" />
      <Box pad="medium">
        <Tabs justify="start">
          <Tab title="General Settings">
            <Settings {...props} />
          </Tab>
          <Tab title="Devices">
            <Devices {...props} />
          </Tab>
          <Tab title="Users">
            <Users {...props} />
          </Tab>
        </Tabs>
      </Box>
    </Box>
  );
}


/**
 * TODO: specify the component propTypes of Account
 * Account propTypes
 */
Account.propTypes = {
  //
};


/**
 * default export
 */
export default Account;
