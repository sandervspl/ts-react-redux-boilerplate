import { combineReducers, createStore, applyMiddleware, compose, GenericStoreEnhancer } from 'redux';
import thunk from 'redux-thunk';
import { appReducers, ReduxState } from 'app/ducks';
import * as api from 'services/apiHelper';

let middleware = applyMiddleware(thunk.withExtraArgument(api));
const reducers = combineReducers<ReduxState>(appReducers);

const w = window as any;

if (__DEV__ && __CLIENT__ && typeof w.devToolsExtension === 'function') {
    middleware = compose(middleware, w.devToolsExtension()) as GenericStoreEnhancer;
}

export const store = createStore<ReduxState>(reducers, middleware);
