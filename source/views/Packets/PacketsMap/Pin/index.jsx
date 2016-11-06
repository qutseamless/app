/**
 * @module Pin component
 */
import React, { PropTypes } from 'react';

import TimeStamp from 'grommet/components/TimeStamp';
import Box from 'grommet/components/Box';
import styles from './styles';


/**
 * @type {Function} Pin Stateless Component
 */
export function Pin (props) {
  const {
    $hover,
    speed,
    temp,
    head,
    alt,
    ...rest,
   } = props;
 
  const backgroundColor = parseColor(temp);
  
  let popup = undefined;
  if ($hover) {
    popup = (
      <div className={styles.popup}>
        <table>
        <tbody>
          <tr><td>temperature:</td><td>{temp} c</td></tr>
          <tr><td>altitude:</td><td>{alt} m</td></tr>
          <tr><td>heading:</td><td>{head} deg</td></tr>
          <tr><td>speed:</td><td>{speed} km/h</td></tr>
        </tbody>
        </table>
        <TimeStamp value={new Date()} />
      </div>
    );
  }

  return (
    <div>
      <div
        className={styles.Pin}
        style={{ backgroundColor }}
      />
      {popup}
    </div>
  );
}

/**
 * this variable takes a temp and returns a hex color
 */
function parseColor(t) {
  if (t > 60) {
    return '#DD2C00';    
  } else if (t > 50) {
    return '#FF6D00';
  } else if (t > 40) {
    return '#FF6D00';
  } else if (t > 30) {
    return '#FFF176';
  } else if (t > 20) {
    return '#80D8FF';
  } else if (t > 10) {
    return '#0091EA';
  }
 }


/**
 * TODO: specify the component propTypes of Pin
 * Pin propTypes
 */
Pin.propTypes = {
  temp: PropTypes.number,
};


/**
 * TODO: specify the component default props of Pin
 * Pin propTypes
 */
Pin.defaultProps = {
  temp: '?',
  alt: '?',
  head: '?',
  speed: '?',
};


/**
 * default export
 */
export default Pin;
