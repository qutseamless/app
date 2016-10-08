/**
 * @module AboutUs component
 */
import React, { PropTypes } from 'react';

import Section from 'grommet/components/Section';
import Article from 'grommet/components/Article';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';

import Header from '../Shared/Header';
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
      <Header {...props} title="About Us" />
      {/*<Hero>
        <Heading>Seamless</Heading>
      </Hero>*/}
      <Section pad="medium">
        <Article pad="small">
          <Heading>Seamless Shipment Logistics</Heading>
          <Paragraph size="large">
            Seamless is changing the way we view logistics. Breaking away from the traditional
            approach, Seamless is providing a Innovation first approach with a cloud technology
            backed logistics network.
          </Paragraph>
        </Article>
      </Section>
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
