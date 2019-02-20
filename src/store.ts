import * as i from 'types';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { api } from 'services';
import { appReducers } from './ducks';

let middleware = applyMiddleware(thunk.withExtraArgument(api));
const reducers = combineReducers<i.ReduxState>(appReducers);

if (__DEV__ && typeof window.__REDUX_DEVTOOLS_EXTENSION__ === 'function') {
  middleware = compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__());
}

export default createStore<i.ReduxState, i.Action, {}, {}>(reducers, middleware);
