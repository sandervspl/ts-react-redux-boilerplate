import { TestStateMap } from './modules/test/types';
import * as test from './modules/test';

export interface ReduxStore {
    test: TestStateMap;
}

export const appReducers = {
    test: test.reducer,
};
