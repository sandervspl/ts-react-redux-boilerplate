import { ActionCreator, Action } from 'ducks/types';

export default (type: string): ActionCreator => (payload?: any, meta?: any): Action => ({
  type,
  payload,
  error: payload instanceof Error,
  meta,
});
