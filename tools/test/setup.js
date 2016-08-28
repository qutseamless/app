/**
 * @module this modules is executed by mocha before tests,
 * place setup code here .
 */


/**
 * import js dom
 */
const { document, window, propogate } = require('./document');

global.document = document;
global.window = window;
global.navigator = {
  userAgent: 'node.js',
};


/**
 * propogate windows properties etc, directly onto global.
 */
propogate(window, global);
