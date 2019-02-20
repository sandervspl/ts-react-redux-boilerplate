import * as i from 'types';

export interface TestState {
  error: boolean;
  loading: boolean;
  passed: boolean;
}

export type InstallAction = () => i.ThunkAction<Promise<void>>;
