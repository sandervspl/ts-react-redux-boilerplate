import * as i from 'types';

export interface TestState {
  error: boolean;
  loading: boolean;
  passed: boolean;
}

export type TestActions = {
  load: () => i.Action,
  success: (passed: boolean) => i.Action,
  failed: () => i.Action,
};

export type InstallAction = () => i.ThunkAction<Promise<void>>;
