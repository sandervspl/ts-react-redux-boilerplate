import * as React from 'react';

// prop children types
export type propChildrenText = string;
export type propChildrenNode = React.ReactChild | React.ReactChildren | React.ReactNode;
export type propChildrenAll = propChildrenText | propChildrenNode;
