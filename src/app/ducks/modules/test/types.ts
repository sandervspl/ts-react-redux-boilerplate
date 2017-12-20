import { IAction, IReducerState } from 'ducks/types';

export interface ITestStateMap extends IReducerState {
    passed?: boolean;
}

export interface ITestState {
    test: ITestStateMap;
}

export interface ITestAction extends IAction {
    payload: {
        passed: boolean;
    };
}
