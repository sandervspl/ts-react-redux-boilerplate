import * as qs from 'qs';

const env = process.env.NODE_ENV || 'development';
const API_ENDPOINT = ({
    production: '',
    development: '',
} as { [key: string]: string })[env];

interface OptionsBody {
    headers: { [key: string]: string };
    method: string;
    body?: string;
}

interface Options {
    path: string;
    options: OptionsBody;
    handle401: boolean;
}

interface MethodOptions {
    method?: string;
    path: string;
    query?: any;
    body?: object;
    withAuth?: boolean;
}

export interface ApiHelper {
    get: (options: MethodOptions) => Promise<any>;
    del: (options: MethodOptions) => Promise<any>;
    post: (options: MethodOptions) => Promise<any>;
    put: (options: MethodOptions) => Promise<any>;
    patch: (options: MethodOptions) => Promise<any>;
}

const request = ({ path, options, handle401 }: Options): Promise<any> => {
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

const generateOptions = ({ method, path, withAuth = false, query, body }: MethodOptions): Options => ({
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

export const get = ({ path, query, withAuth }: MethodOptions) =>
    request(generateOptions({ method: 'GET', path, query, withAuth }));
export const del = ({ path, query, withAuth }: MethodOptions) =>
    request(generateOptions({ method: 'DELETE', path, query, withAuth }));
export const post = ({ path, body, withAuth }: MethodOptions) =>
    request(generateOptions({ method: 'POST', path, body, withAuth }));
export const put = ({ path, body, withAuth }: MethodOptions) =>
    request(generateOptions({ method: 'PUT', path, body, withAuth }));
export const patch = ({ path, body, withAuth }: MethodOptions) =>
    request(generateOptions({ method: 'PATCH', path, body, withAuth }));
