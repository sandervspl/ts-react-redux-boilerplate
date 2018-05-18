// prop children types
import * as React from 'react';

export type PropChildrenText = string;
export type PropChildrenNode = React.ReactChild | React.ReactChildren | React.ReactNode;
export type PropChildrenAll = PropChildrenText | PropChildrenNode;

export type ReactComponent = React.ComponentClass | React.StatelessComponent;

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

export interface ApiHelper {
  get: (options: GenerateOptions) => Promise<any>;
  del: (options: GenerateOptions) => Promise<any>;
  post: (options: GenerateOptions) => Promise<any>;
  put: (options: GenerateOptions) => Promise<any>;
  patch: (options: GenerateOptions) => Promise<any>;
}
