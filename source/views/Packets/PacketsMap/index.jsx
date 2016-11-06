/**
 * @module PacketsMap Component
 */
import React, { PropTypes, PureComponent } from 'react';
import GoogleMap from 'google-map-react';
import Pin from './Pin';


const API_KEY = 'AIzaSyBf-z-G_Hobiy1JBXxre6ENh5XFJmKRE0o';


/**
 * shows packets sent on a map
 */
export class PacketsMap extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { user, params, packetsGet } = this.props;
    const { id: shipmentId } = params;
    const { token } = user.oauth;

    packetsGet({ token, shipmentId });
  }

  render() {
    const { packets } = this.props;
    const pins = packets.map(
      (i, k) => (
        <Pin key={k} {...i} />
      )
    );

    return (
      <GoogleMap
        defaultCenter={packets[0] || this.props.defaultCenter}
        defaultZoom={11}
        bootstrapURLKeys={{
          language: 'en',
          key: API_KEY,
        }}
      >
        {pins}
      </GoogleMap>
    );
  }
}


/**
 * PacketsMap propTypes
 */
PacketsMap.propTypes = {
  defaultCenter: PropTypes.object,
  packets: PropTypes.array,
  packetsGet: PropTypes.func,
  params: PropTypes.object,
  user: PropTypes.object,
};

/**
 * PacketsMap defaultProps
 */
PacketsMap.defaultProps = {
  packets: [],
  defaultCenter: { lat: -27.470125, lng: 153.021072 },
};


/**
 * default export
 */
export default PacketsMap;
