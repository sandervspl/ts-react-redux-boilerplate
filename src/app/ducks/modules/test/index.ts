import * as i from 'app/interfaces';
import { createAction } from 'app/services';

const LOAD = 'test/load';
const SUCCESS = 'test/success';
const FAILED = 'test/failed';

const initialState: i.TestStateMap = {
  error: false,
  loading: false,
  passed: false,
};

export const reducer = (state: i.TestStateMap = initialState, action: i.TestAction): i.TestStateMap => {
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
export const install: i.InstallAction = (): i.Thunk => {
  return (dispatch: i.Dispatch<i.ReduxState>, getState: () => i.ReduxState, api): Promise<void> => {
    dispatch(load());

    setTimeout(() => {
      dispatch(success({ passed: true }));
    }, 2000);

    return;
  };
};
