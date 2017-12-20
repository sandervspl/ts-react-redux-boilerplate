/*
* Actions must follow the flux standard action (FSA) standard, found here:
* (https://github.com/acdlite/flux-standard-action). Some middleware also
* assume this standard. To enforce consistent actions and to avoid unnecessary
* boilerplate, this action creator must be used.
*/

import { actionCreator } from 'services/customTypes';
import { IAction } from 'ducks/types';

/*
 * Declare that this is a function that returns an "actionCreator" type.
 * An "actionCreator" should return a function: "(payload, meta) => IAction"
 * An "IAction" should return all properties in this interface
 */
export default (type: string): actionCreator => (payload?: any, meta?: any): IAction => ({
    type,
    payload,
    error: payload instanceof Error,
    meta,
});
