import { Dispatch } from 'react-redux';
import { IReduxStore } from 'app/ducks';

export type Dispatcher = () => (dispatch: Dispatch<IReduxStore>) => void;

// initial state
export interface IReducerState {
    error?: boolean;
    loading?: boolean;
}

// default action
export interface IAction {
    type: string;
    payload?: any;
    error?: boolean;
    meta?: any;
}
