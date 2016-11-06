/**
 * @module ShipmentsTable Component
 */
import React, { PropTypes, PureComponent } from 'react';
import styles from './styles';

import Box from 'grommet/components/Box';
import Title from 'grommet/components/Title';
import TableRow from 'grommet/components/TableRow';
import Table from 'grommet/components/Table';
import Timestamp from 'grommet/components/Timestamp';

import Link from '../../Shared/Link';
/**
 * @type {PureComponent} ShipmentsTable PureComponent
 */
export class ShipmentsTable extends PureComponent {
  /**
   * TODO: specify initial state and bindings of ShipmentsTable
   * executes on instantiation
   */
  constructor(props) {
    super(props)
    //
  }


  /**
   * TODO: specify setup of ShipmentsTable
   * executes post mount
   */
  componentDidMount() {
    const { user, shipmentsGet } = this.props;
    const { token } = user.oauth;

    shipmentsGet({ token });
  }


  /**
   * TODO: specify cleanup of ShipmentsTable
   * executes pre unmount
   */
  componentWillMount() {
    //
  }

  /**
   * TODO: specify design of ShipmentsTable
   * executes on render
   */
  render() {
    const { shipments } = this.props;
    const tableRowViews = shipments.map((i, k) => (
      <TableRow key={k}>
        <td><Link className={styles.link} to={`shipments/${i._id}`}>{i._id}</Link></td>
        <td>{i.deviceId}</td>
        <td><Timestamp value={i.createdAt} /></td>
      </TableRow>
    ))
    return (
      <Box margin="medium">
        <Title pad="medium">
          <h2>Your Current Shipments</h2>
        </Title>
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>deviceId</th>
              <th>Created At</th>
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
 * TODO: specify the component propTypes of ShipmentsTable
 * ShipmentsTable propTypes
 */
ShipmentsTable.propTypes = {
  shipmentsGet: PropTypes.func,
  shipments: PropTypes.array,
  user: PropTypes.object,
};


/**
 * default export
 */
export default ShipmentsTable;
