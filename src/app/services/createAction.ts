import * as i from 'app/interfaces';

export default (type: string): i.ActionCreator => (payload?: any, meta?: any): i.Action => ({
  type,
  payload,
  error: payload instanceof Error,
  meta,
});
