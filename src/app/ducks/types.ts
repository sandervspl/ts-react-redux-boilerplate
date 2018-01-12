import { Dispatch } from 'react-redux';
import { ReduxStore } from 'app/ducks';

export type Dispatcher = () => (dispatch: Dispatch<ReduxStore>) => void;

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

export type ActionCreator = (payload?: any, meta?: any) => Action;
