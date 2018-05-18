import { port } from './index';

const env = process.env.NODE_ENV || 'development';
const appEnv = process.env.APP_ENV || 'development';

export default (type: string) => ({
  'process.env': {
    NODE_ENV: JSON.stringify(env),
    APP_ENV: JSON.stringify(appEnv),
    PORT: port,
  },
  __DEV__: appEnv === 'development',
  __TEST__: appEnv === 'test',
  __PROD__: appEnv === 'production',
  __ACC__: appEnv === 'acceptation',
  __CLIENT__: type === 'client',
  __SERVER__: type === 'server',
});
