import { TestStateMap } from './modules/test/types';
import * as test from './modules/test';

export interface ReduxState {
  test: TestStateMap;
}

export const appReducers = {
  test: test.reducer,
};
