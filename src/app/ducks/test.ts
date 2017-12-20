import { Dispatch } from 'redux';
import { IReducerState, IAction, Dispatcher } from 'ducks/types';
import { IReduxStore } from './index';
import createAction from 'services/createAction';

const LOAD = 'test/load';
const SUCCESS = 'test/success';
const FAILED = 'test/failed';

/*
 * __NOTE: Extending an interface
 * In order to add more specific data to an interface, we can extend another existing interface.
 * In this example we want to add the "passed" data type.
 * This interface is also used for the store's interface (IReduxStore).
 */
export interface ITestStateMap extends IReducerState {
    passed?: boolean;
}

/*
 * This is the interface that a component props interface can use to extend its own props
 */
export interface ITestState {
    test: ITestStateMap;
}

/*
 * __NOTE: Using interfaces as minimal required keys in object literals
 * In the following object we do not extend it with the IInitialState interface, but with ITestState,
   because ITestState is more accurate to the data structure of our state.
 */
const initialState: ITestStateMap = {
    error: false,
    loading: false,
    passed: false,
};

/*
 * Modify reducer interface with a custom payload data type.
 */
export interface ITestAction extends IAction {
    payload: {
        passed: boolean;
    };
}

/* tslint:disable */
/*
 * __NOTE: Use "parent interface" to require a minimum data structure
 * We declare in the reducer's state parameter that the state should extend "IReducerState".
 * This is the "default" interface for a redux store.
 * We extend it so that we get "loading" and "error" bound to our state's interface.
 *
 * We Changed action data type from IAction to ITestAction to correctly implement its payload data type.
 */
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
/* tslint:enable */

export const load = createAction(LOAD);
export const success = createAction(SUCCESS);
export const failed = createAction(FAILED);

export const install: Dispatcher = () => (dispatch: Dispatch<IReduxStore>) => {
    dispatch(load());

    setTimeout(() => {
        dispatch(success({ passed: true }));
    }, 2000);
};
