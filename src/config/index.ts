// import * as i from '@types';
export const env = process.env.NODE_ENV || 'development';

export const port = {
  client: Number(process.env.PORT) || 3000,
  server: 4000,
};

export const api = {
  production: `http://localhost:${port.server}/`,
  development: `http://localhost:${port.server}/`,
}[env];
