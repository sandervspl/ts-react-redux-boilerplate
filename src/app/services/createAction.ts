import { ActionCreator ,IAction } from 'ducks/types';

export default (type: string): ActionCreator => (payload?: any, meta?: any): IAction => ({
    type,
    payload,
    error: payload instanceof Error,
    meta,
});
