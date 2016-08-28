/**
 * @module manages the task of building the app.
 */
import { clean, copy, bundle } from '../libs';
import config from './webpack.config';

/**
 * performs tasks of:
 *  - clean directory.
 *  - copy static assets.
 *  - rebuild modules.
 */
clean('build')
  .then(() => copy('source/index.html', 'build', { srcBase: 'source' }))
  .then(() => copy('source/assets/**', 'build', { srcBase: 'source' }))
  .then(() => bundle(config))
  .catch(console.log);
