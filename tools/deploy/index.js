import { run } from '../libs';

run('docker', [
  'build',
  '-t', 'leonp1991/seamless_api',
  '-f', `${__dirname}/Dockerfile`,
  '.',
]);
