/**
 * @module AboutUs component
 */
import React, { PropTypes } from 'react';

import Hero from 'grommet/components/Hero';
import Article from 'grommet/components/Article';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';

import styles from './styles';


/**
 * @type {Function} AboutUs Stateless Component
 */
export function AboutUs (props) {
  /**
   * executes on render
   */
  return (
    <div>
      <Hero backgroundImage="assets/hero.png" />
      <Article pad="large">
        <Heading>Seamless Shipment Logistics</Heading>
        <Paragraph size="large">
          Seamless is changing the way we view logistics. Breaking away from the traditional
          approach, Seamless is providing a Innovation first approach with a cloud technology
          backed logistics network.
        </Paragraph>
      </Article>
    </div>
  );
}


/**
 * TODO: specify the component propTypes of AboutUs
 * AboutUs propTypes
 */
AboutUs.propTypes = {
  //
};


/**
 * default export
 */
export default AboutUs;
