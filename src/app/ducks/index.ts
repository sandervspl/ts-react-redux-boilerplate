import * as i from 'app/interfaces';
import * as test from './modules/test';

export interface ReduxState {
  test: i.TestStateMap;
}

export const appReducers = {
  test: test.reducer,
};
