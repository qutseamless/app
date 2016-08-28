/**
 * @module compiles with webpack to the test bundle
 */


/**
 * setup chai here as webpack compiles it differently to how babel-node
 * interprets it.
 */
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import chaiImmutable from 'chai-immutable';
import chaiSpies from 'chai-spies';


/**
 * Extend chai with modules needed
 */
chai.use(chaiAsPromised);
chai.use(chaiImmutable);
chai.use(chaiSpies);


/**
 * gather all modules ending in spec.
 */
const specs = require.context('../../source', true, /\/spec\.jsx?$/);
specs.keys().forEach(specs);

/*
eslint
import/no-extraneous-dependencies: 0,
no-unused-vars: 0,
*/
