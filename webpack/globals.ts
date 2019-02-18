import * as i from 'types';
import { port } from 'config';

const env = process.env.NODE_ENV || 'development';

export default (type: i.AppType) => ({
  'process.env': {
    NODE_ENV: JSON.stringify(env),
    PORT: port[type],
  },
  __DEV__: env === 'development',
  __TEST__: env === 'test',
  __PROD__: env === 'production',
  __ACC__: env === 'acceptation',
});
