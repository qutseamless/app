/**
 * @module ShipmentControls Component
 */
import React, { PropTypes, PureComponent } from 'react';
import styles from './styles';

import Box from 'grommet/components/Box';
import Title from 'grommet/components/Title';

import FormField from 'grommet/components/FormField';
import Button from 'grommet/components/Button';

/**
 * @type {PureComponent} ShipmentControls PureComponent
 */
export class ShipmentControls extends PureComponent {
  /**
   * TODO: specify initial state and bindings of ShipmentControls
   * executes on instantiation
   */
  constructor(props) {
    super(props)
    this.createShipment = this.createShipment.bind(this);
    this.setDeviceId = this.setDeviceId.bind(this);

    const deviceId = '';
    this.state = { deviceId };
  }

  createShipment(props, deviceId) {
    const { shipmentCreate, user } = props;
    const { token } = user.oauth;

    shipmentCreate({ deviceId, token });
  }

  setDeviceId(value) {
    this.setState({ deviceId: value });
  }

  /**
   * TODO: specify design of ShipmentControls
   * executes on render
   */
  render() {
    const { props, state, createShipment, setDeviceId } = this;
    const { deviceId } = state;
    return (
      <Box margin="medium" colorIndex="grey-1">
        <Title pad="medium">
          <h2>Create A Shipment</h2>
        </Title>
        <Box direction="row" justify="between" align="center" pad="medium">
          <h3>Add the deviceId of the shipment tracker.</h3>
          <Box direction="row" size="large" pad={{ between: "medium" }}>
            <FormField label="deviceId">
              <input
                type="text" value={deviceId}
                onChange={event => setDeviceId(event.target.value)}
              />
            </FormField>
            <Button
              label="Create" primary
              onClick={() => createShipment(props, deviceId)}
            />
          </Box>
        </Box>
      </Box>
    );
  }
}


/**
 * TODO: specify the component propTypes of ShipmentControls
 * ShipmentControls propTypes
 */
ShipmentControls.propTypes = {
  //
};


/**
 * default export
 */
export default ShipmentControls;
