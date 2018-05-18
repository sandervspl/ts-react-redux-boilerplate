import { TestState } from 'ducks/modules/test/types';
import { Dispatcher } from 'ducks/types';

export interface HomeProps extends TestState {
  install: Dispatcher;
}
