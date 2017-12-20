import * as React from 'react';
import { IAction } from 'ducks/types';

/*
 * __NOTE: Custom types
 * We can create custom data types. These can can consist of standard string/boolean types,
 * or be more complex like entire objects.
 */

// prop children types
export type propChildrenText = string;
export type propChildrenNode = React.ReactChild | React.ReactChildren | React.ReactNode;
export type propChildrenAll = propChildrenText | propChildrenNode;

/*
 * REDUX
 */

/* action creator
 * Function that takes two parameters: payload, meta
 * Returns an IAction data type
 *
 *  __NOTE: Optional parameters in functions
 * parameters are set as optional with '?'
 */
export type actionCreator = (payload?: any, meta?: any) => IAction;
