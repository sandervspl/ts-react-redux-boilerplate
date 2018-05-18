import * as qs from 'qs';
import { RequestOptions, GenerateOptions } from './types';

const env = process.env.NODE_ENV || 'development';
const API_ENDPOINT = {
  production: '',
  development: '',
}[env];

const request = ({ path, options, handle401 }: RequestOptions): Promise<any> => {
  return new Promise((resolve, reject) => {
    fetch(path, options)
      .then((response) => {
        const unauthorized = response.status === 401 || response.status === 403;

        if (unauthorized && handle401) {
          window.localStorage.removeItem('JWTTOKEN');
        }

        // FOR DELETE CALLS WHEN BACK-END DOESN'T RETURN ANYTHING
        if (response.status === 204) return;

        if (response.ok) {
          const token = response.headers.get('JWT-Token');
          if (token) window.localStorage.setItem('JWTTOKEN', token);
          return response.json();
        }

        return reject({ status: response.status, statusText: response.statusText });
      })
      .then((json) => {
        resolve(json);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const generateOptions = ({ method, path, withAuth = false, query, body }: GenerateOptions): RequestOptions => ({
  path: `${API_ENDPOINT}${path}${query ? '?' : ''}${qs.stringify(query || {})}`,
  options: {
    headers: {
      ...(withAuth ? { authorization: `JWT token="${window.localStorage.getItem('JWTTOKEN')}"` } : {}),
      Accept: 'application/json',
    },
    method,
    ...(body ? { body: JSON.stringify(body) } : {}),
  },
  handle401: withAuth,
});

export const get = ({ path, query, withAuth }: GenerateOptions) =>
  request(generateOptions({ method: 'GET', path, query, withAuth }));
export const del = ({ path, query, withAuth }: GenerateOptions) =>
  request(generateOptions({ method: 'DELETE', path, query, withAuth }));
export const post = ({ path, body, withAuth }: GenerateOptions) =>
  request(generateOptions({ method: 'POST', path, body, withAuth }));
export const put = ({ path, body, withAuth }: GenerateOptions) =>
  request(generateOptions({ method: 'PUT', path, body, withAuth }));
export const patch = ({ path, body, withAuth }: GenerateOptions) =>
  request(generateOptions({ method: 'PATCH', path, body, withAuth }));
