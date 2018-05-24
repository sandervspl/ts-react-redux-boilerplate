import * as i from 'app/interfaces';

export type Dispatcher = () => (dispatch: i.Dispatch<i.ReduxState>) => void;

export type ActionCreator = (payload?: any, meta?: any) => Action;

export type Thunk = (dispatch: i.Dispatch<i.ReduxState>, getState: () => i.ReduxState, api: i.ApiHelper) => void;

// initial state
export interface ReducerState {
  error?: boolean;
  loading?: boolean;
}

// default action
export interface Action {
  type: string;
  payload?: any;
  error?: boolean;
  meta?: any;
}
