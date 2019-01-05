import * as i from 'types';
export * from './test/types';
import { Dispatch } from 'redux';
import { ThunkAction as IThunkAction } from 'redux-thunk';

export interface ReduxState {
  test: i.TestState;
}

export interface Action<P = any> {
  type: string;
  payload?: P;
  error?: boolean,
  meta?: any,
}

// R = Return Type
export type ThunkAction<R> = IThunkAction<R, i.ReduxState, i.ApiHelper, Action>;

export type D = Dispatch<i.Action>;
export type GS = () => i.ReduxState;
export type A = i.ApiHelper;
