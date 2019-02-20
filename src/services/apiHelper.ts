import * as i from 'types';
import * as qs from 'qs';
import { api as apiUrl } from 'config';

class Api implements i.ApiHelper {
  public get = ({ path, query, withAuth }: i.GenerateOptions) =>
  this.request(this.generateOptions({ method: 'GET', path, query, withAuth }))

  public del = ({ path, query, withAuth }: i.GenerateOptions) =>
    this.request(this.generateOptions({ method: 'DELETE', path, query, withAuth }))

  public post = ({ path, body, withAuth }: i.GenerateOptions) =>
    this.request(this.generateOptions({ method: 'POST', path, body, withAuth }))

  public put = ({ path, body, withAuth }: i.GenerateOptions) =>
    this.request(this.generateOptions({ method: 'PUT', path, body, withAuth }))

  public patch = ({ path, body, withAuth }: i.GenerateOptions) =>
    this.request(this.generateOptions({ method: 'PATCH', path, body, withAuth }))

  private request = async ({ path, options, handle401 }: i.RequestOptions): Promise<any> => {
    return new Promise((resolve, reject) => {
      fetch(path, options)
        .then((response) => {
          // FOR DELETE CALLS WHEN BACK-END DOESN'T RETURN ANYTHING
          if (response.status === 204) return;

          if (response.ok) {
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
  }

  private generateOptions = (options: i.GenerateOptions): i.RequestOptions => {
    const { method, path, withAuth = false, query, body } = options;

    return {
      path: `${apiUrl}${path}${query ? '?' : ''}${qs.stringify(query || {})}`,
      options: {
        headers: {
          'Content-Type': 'application/json',
        },
        method,
        ...body ? { body: JSON.stringify(body) } : {},
      },
      handle401: withAuth,
    };
  }
}

const api = new Api();

export default api;
