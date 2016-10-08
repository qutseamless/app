/**
 * @module PacketsTable Component
 */
import React, { PropTypes, PureComponent } from 'react';
import styles from './styles';

import Box from 'grommet/components/Box';
import Title from 'grommet/components/Title';
import TableRow from 'grommet/components/TableRow';
import Table from 'grommet/components/Table';
import TimeStamp from 'grommet/components/TimeStamp';

import Link from '../../Shared/Link';
/**
 * @type {PureComponent} PacketsTable PureComponent
 */
export class PacketsTable extends PureComponent {
  /**
   * TODO: specify initial state and bindings of PacketsTable
   * executes on instantiation
   */
  constructor(props) {
    super(props)
    //
  }


  /**
   * TODO: specify setup of PacketsTable
   * executes post mount
   */
  componentDidMount() {
    const { user, params, packetsGet } = this.props;
    const { id: shipmentId } = params;
    const { token } = user.oauth;

    packetsGet({ token, shipmentId });
  }


  /**
   * TODO: specify cleanup of PacketsTable
   * executes pre unmount
   */
  componentWillMount() {
    //
  }

  /**
   * TODO: specify design of PacketsTable
   * executes on render
   */
  render() {
    const { packets, params } = this.props;
    const { id } = params;
    const tableRowViews = packets.map((i, k) => (
      <TableRow key={k}>
        <td>{i._id}</td>
        <td>{i.location.lat}</td>
        <td>{i.location.long}</td>
        <td><TimeStamp value={i.createdAt} /></td>
      </TableRow>
    ))
    return (
      <div>
        <Title pad="medium">
          <h3>Viewing packets for shipment: {id}</h3>
        </Title>
        <Table pad="medium">
          <thead>
            <tr>
              <th>Id</th>
              <th>Latitude</th>
              <th>Longitude</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {tableRowViews}
          </tbody>
        </Table>
      </div>
    );
  }
}


/**
 * TODO: specify the component propTypes of PacketsTable
 * PacketsTable propTypes
 */
PacketsTable.propTypes = {
  packetsGet: PropTypes.func,
  packets: PropTypes.array,
  params: PropTypes.object,
  user: PropTypes.object,
};


/**
 * default export
 */
export default PacketsTable;
