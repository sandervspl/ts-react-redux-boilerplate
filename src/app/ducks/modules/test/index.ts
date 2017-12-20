import createAction from 'services/createAction';
import { Dispatcher } from 'ducks/types';
import { Dispatch } from 'redux';
import { IReduxStore } from 'app/ducks';
import { ITestStateMap, ITestAction } from './types';

const LOAD = 'test/load';
const SUCCESS = 'test/success';
const FAILED = 'test/failed';

const initialState: ITestStateMap = {
    error: false,
    loading: false,
    passed: false,
};

export const reducer = (state: ITestStateMap = initialState, action: ITestAction): ITestStateMap => {
    switch (action.type) {
        case LOAD:
            return {
                ...state,
                loading: true,
                error: false,
            };

        case SUCCESS:
            return {
                ...state,
                passed: action.payload.passed,
                loading: false,
            };

        case FAILED:
            return {
                ...state,
                error: true,
                loading: false,
            };

        default:
            return state;
    }
};

export const load = createAction(LOAD);
export const success = createAction(SUCCESS);
export const failed = createAction(FAILED);

export const install: Dispatcher = () => (dispatch: Dispatch<IReduxStore>) => {
    dispatch(load());

    setTimeout(() => {
        dispatch(success({ passed: true }));
    }, 2000);
};
