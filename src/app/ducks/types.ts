import { Dispatch } from 'react-redux';
import { ReduxState } from 'app/ducks';
import { ApiHelper } from 'services/types';

export type Dispatcher = () => (dispatch: Dispatch<ReduxState>) => void;

export type ActionCreator = (payload?: any, meta?: any) => Action;

export type Thunk = (dispatch: Dispatch<ReduxState>, getState: () => ReduxState, api: ApiHelper) => void;

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
