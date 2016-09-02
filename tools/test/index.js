/**
 * @module runs a mocha test suite (built by webpack) with nyc
 * (previously istanbul api), and performs a post cleanup.
 */
import { bundle, run, clean } from '../libs';
import config from './webpack.config';


/**
 * performs the task of:
 *  - webpack test bundle.
 *  - run nyc/mocha.
 *  - post clean up.
 */
bundle(config)
.then(async error => {
  if (error) {
    console.error(error);
    return;
  }

  try {
    process.exitCode = await run('mocha', [
      'tools/test/temp/tests.bundle.js', '--opts', 'tools/test/mocha.opts',
    ]);

    await clean('.nyc_output');
    await clean('tools/test/temp');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
});

/*
eslint
import/no-extraneous-dependencies: 0,
no-shadow: 0,
*/
