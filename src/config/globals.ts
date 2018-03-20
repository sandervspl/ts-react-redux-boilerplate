import { port } from './index';

const env = process.env.NODE_ENV || 'development';

export default (type: string) => ({
    'process.env': {
        NODE_ENV: JSON.stringify(env),
        PORT: port,
    },
    __DEV__: env === 'development',
    __PROD__: env === 'production',
    __ACC__: env === 'acceptation',
    __CLIENT__: type === 'client',
    __SERVER__: type === 'server',
});
