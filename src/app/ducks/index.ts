import { ITestStateMap } from './modules/test/types';
import * as test from './modules/test';

export interface IReduxStore {
    test: ITestStateMap;
}

export const appReducers = {
    test: test.reducer,
};
