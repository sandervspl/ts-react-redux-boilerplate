export interface RequestOptions {
  path: string;
  options: RequestInit;
  handle401: boolean;
}

export interface GenerateOptions {
  method?: string;
  path: string;
  query?: any;
  body?: object;
  withAuth?: boolean;
}

type FetchCall = <T = any>(options: GenerateOptions) => Promise<T>;

export interface ApiHelper {
  get: FetchCall;
  del: FetchCall;
  post: FetchCall;
  put: FetchCall;
  patch: FetchCall;
}
