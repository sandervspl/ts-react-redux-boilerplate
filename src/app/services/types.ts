// prop children types
import * as React from 'react';

export type propChildrenText = string;
export type propChildrenNode = React.ReactChild | React.ReactChildren | React.ReactNode;
export type propChildrenAll = propChildrenText | propChildrenNode;

export interface OptionsBody {
    headers: { [key: string]: string };
    method: string;
    body?: string;
}

export interface RequestOptions {
    path: string;
    options: OptionsBody;
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