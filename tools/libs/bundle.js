/**
 * @module this module accepts a webpack config and builds it promiesified.
 */
import webpack from 'webpack';


/**
 * builds a webpack bundle.
 * @param {Object} config the bundle config
 * @returns {Promise} returns a promise which resolves on task completion.
 */
export function bundle(config) {
  return new Promise(
    resolve => webpack(config).run(resolve)
  );
}

export default bundle;

/*
eslint
import/no-extraneous-dependencies: 0,
*/
