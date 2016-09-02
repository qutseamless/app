/**
 * this module is used for developing and runs the webpac dev server, connected
 * to webpack dashboard.
 */
import { run } from '../libs';


/**
 * runs webpack dev server connected to webpack dashboard.
 */
run('webpack-dashboard', [
  '--',
  'webpack-dev-server',
  '--config',
  `${__dirname}/webpack.config.js`,
  '--content-base', 'build/',
  '--hot', '--inline',
]);
