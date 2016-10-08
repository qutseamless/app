/**
 * @module Users Component
 */
import React, { PropTypes, PureComponent } from 'react';
import styles from './styles';

import UserControls from './UserControls';
import UsersTable from './UsersTable';

/**
 * @type {PureComponent} Users PureComponent
 */
export class Users extends PureComponent {
  /**
   * TODO: specify initial state and bindings of Users
   * executes on instantiation
   */
  constructor(props) {
    super(props)
    //
  }


  /**
   * TODO: specify setup of Users
   * executes post mount
   */
  componentDidMount() {
    //
  }

  /**
   * TODO: specify cleanup of Users
   * executes pre unmount
   */
  componentWillMount() {
    //
  }

  /**
   * TODO: specify design of Users
   * executes on render
   */
  render() {
    const { props } = this;
    return (
      <div>
        <UserControls {...props} />
        <UsersTable {...props} />
      </div>
    );
  }
}


/**
 * TODO: specify the component propTypes of Users
 * Users propTypes
 */
Users.propTypes = {
  //
};


/**
 * default export
 */
export default Users;
