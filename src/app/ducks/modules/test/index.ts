import createAction from 'services/createAction';
import { Thunk } from 'ducks/types';
import { Dispatch } from 'redux';
import { ReduxState } from 'app/ducks';
import { TestStateMap, TestAction, InstallAction } from './types';
import { ApiHelper } from 'services/types';

const LOAD = 'test/load';
const SUCCESS = 'test/success';
const FAILED = 'test/failed';

const initialState: TestStateMap = {
  error: false,
  loading: false,
  passed: false,
};

export const reducer = (state: TestStateMap = initialState, action: TestAction): TestStateMap => {
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

// async actions
export const install: InstallAction = (): Thunk => {
  return (dispatch: Dispatch<ReduxState>, getState: () => ReduxState, api: ApiHelper): Promise<void> => {
    dispatch(load());

    setTimeout(() => {
      dispatch(success({ passed: true }));
    }, 2000);

    return;
  };
};
