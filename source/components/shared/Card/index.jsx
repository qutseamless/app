import React, { PropTypes } from 'react';
import Transition from 'react-addons-css-transition-group';

import './styles.scss';

export const Card = props => (
  <div>
    <Transition
      transitionName="Paper"
      transitionAppear transitionAppearTimeout={1000}
      transitionLeaveTimeout={300} transitionEnter={false}
    >
      <div className="Card" key="1">
            {props.children}
      </div>
    </Transition>
  </div>
);

Card.propTypes = {
  children: PropTypes.object,
};

export default Card;
