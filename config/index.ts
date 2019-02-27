export const env = process.env.NODE_ENV || 'development';

export const port = {
  client: Number(process.env.PORT) || 3000,
  api: 4000,
};

export const api = {
  production: `http://localhost:${port.api}/`,
  development: `http://localhost:${port.api}/`,
}[env];
