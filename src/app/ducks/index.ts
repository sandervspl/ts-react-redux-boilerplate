import * as test from './test';

export interface IReduxStore {
    test: test.ITestStateMap;
}

export const appReducers = {
    test: test.reducer,
};
