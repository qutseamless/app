/**
 * @module UsersTable Component
 */
import React, { PropTypes, PureComponent } from 'react';
import styles from './styles';

import Box from 'grommet/components/Box';
import Title from 'grommet/components/Title';
import TableRow from 'grommet/components/TableRow';
import Table from 'grommet/components/Table';
import TimeStamp from 'grommet/components/TimeStamp';

/**
 * @type {PureComponent} UsersTable PureComponent
 */
export class UsersTable extends PureComponent {
  /**
   * TODO: specify initial state and bindings of UsersTable
   * executes on instantiation
   */
  constructor(props) {
    super(props)
    //
  }


  /**
   * TODO: specify setup of UsersTable
   * executes post mount
   */
  componentDidMount() {
    //
  }


  /**
   * TODO: specify cleanup of UsersTable
   * executes pre unmount
   */
  componentWillMount() {
    //
  }

  /**
   * TODO: specify design of UsersTable
   * executes on render
   */
  render() {
    const { users = [] } = this.props;
    const tableRowViews = users.map((i, k) => (
      <TableRow key={k}>
        <td>{i.name}</td>
        <td>{i.email}</td>
        <td>{i.admin}</td>
      </TableRow>
    ));
    return (
      <Box margin="medium">
        <Title pad="medium">
          <h2>Your Current Users</h2>
        </Title>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
            </tr>
          </thead>
          <tbody>
            {tableRowViews}
          </tbody>
        </Table>
      </Box>
    );
  }
}


/**
 * TODO: specify the component propTypes of UsersTable
 * UsersTable propTypes
 */
UsersTable.propTypes = {
  //
};


/**
 * default export
 */
export default UsersTable;
