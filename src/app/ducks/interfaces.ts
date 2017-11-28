import { Dispatch } from 'react-redux';
import { IReduxStore } from 'ducks/index';

export type dispatcher = () => (dispatch: Dispatch<IReduxStore>) => void;
