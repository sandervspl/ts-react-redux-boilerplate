import * as i from 'types';
import { action } from 'typesafe-actions';

const LOAD = 'user/load';
const SUCCESS = 'user/success';
const FAILED = 'user/failed';

const initialState: i.TestState = {
  error: false,
  loading: false,
  passed: false,
};

export default (state = initialState, action: i.Actions<typeof actions>) => {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true,
        error: false,
        passed: false,
      };

    case SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        passed: action.payload,
      };

    case FAILED:
      return {
        ...state,
        loading: false,
        error: true,
        passed: false,
      };

    default:
      return state;
  }
};

export const actions = {
  load: () => action(LOAD),
  success: (passed: boolean) => action(SUCCESS, passed),
  failed: () => action(FAILED),
};

export const install: i.InstallAction = () => {
  return async (dispatch, getState, api) => {
    dispatch(actions.load());

    setTimeout(() => {
      dispatch(actions.success(true));
    }, 2000);

    return;
  };
};
