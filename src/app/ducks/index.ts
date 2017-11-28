import * as test from './test';

/*
 * __NOTE: Generate a complete redux store interface.
 * Useful for when you want to retrieve state from the store.
 * Suggestions will always be accurate and trying to access anything that does not exist will result in errors
 * while writing the code.
 */
export interface IReduxStore {
    test: test.ITestStateMap;
}

export const appReducers = {
    test: test.reducer,
};
