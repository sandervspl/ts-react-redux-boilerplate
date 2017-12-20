import { ITestState } from 'ducks/modules/test/types';
import { Dispatcher } from 'ducks/types';

export interface IHomeProps extends ITestState {
    install: Dispatcher;
}
