import * as i from 'app/interfaces';

export interface TestStateMap extends i.ReducerState {
  passed?: boolean;
}

export interface TestState {
  test: TestStateMap;
}

export interface TestAction extends i.Action {
  payload: {
    passed: boolean;
  };
}

export type InstallAction = () => i.Thunk;
