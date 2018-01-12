import { Action, ReducerState } from 'ducks/types';

export interface TestStateMap extends ReducerState {
    passed?: boolean;
}

export interface TestState {
    test: TestStateMap;
}

export interface TestAction extends Action {
    payload: {
        passed: boolean;
    };
}
