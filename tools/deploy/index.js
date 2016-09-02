import { run } from '../libs';

run('docker', [
  'build',
  '-t', 'qutseamless/client',
  '-f', `${__dirname}/Dockerfile`, '.',
])
.then(() => run('docker', ['push', 'qutseamless/client']));
