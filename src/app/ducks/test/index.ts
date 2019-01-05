import * as i from 'types';
import { action, ActionType } from 'typesafe-actions';

type TestActions = ActionType<typeof actions>;

const LOAD = 'user/load';
const SUCCESS = 'user/success';
const FAILED = 'user/failed';

const initialState: i.TestState = {
  error: false,
  loading: false,
  passed: false,
};

export default (state = initialState, action: TestActions): i.TestState => {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: false,
        error: false,
      };

    case SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        passed: true,
      };

    case FAILED:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

export const actions = {
  load: () => action(LOAD),
  success: () => action(SUCCESS),
  failed: () => action(FAILED),
};

export const install: i.InstallAction = () => {
  return async (dispatch, getState, api) => {
    dispatch(actions.load());

    setTimeout(() => {
      dispatch(actions.success());
    }, 2000);

    return;
  };
};
