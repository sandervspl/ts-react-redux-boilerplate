import * as i from 'types';
import { Dispatch } from 'redux';
import { ThunkAction as IThunkAction } from 'redux-thunk';
import { ActionType } from 'typesafe-actions';

export interface ReduxState {
  test: i.TestState;
}

export interface Action<P = any> {
  type: string;
  payload?: P;
  error?: boolean,
  meta?: any,
}

export type Actions<A> = ActionType<A>;

export type ThunkAction<ReturnType> = IThunkAction<ReturnType, i.ReduxState, i.ApiHelper, Action>;

export type D = Dispatch<i.Action>;
export type GS = () => i.ReduxState;
export type A = i.ApiHelper;
