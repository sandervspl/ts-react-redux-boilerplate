import { combineReducers, createStore, applyMiddleware, compose, GenericStoreEnhancer } from 'redux';
import thunk from 'redux-thunk';
import * as api from './services/apiHelper';
import { appReducers, ReduxState } from './ducks';

let middleware = applyMiddleware(thunk.withExtraArgument(api));
const reducers = combineReducers<ReduxState>(appReducers);

if (__CLIENT__ && __DEV__) {
  const devTools = window.devToolsExtension;

  if (process.env.NODE_ENV === 'development' && typeof devTools === 'function') {
    middleware = compose(middleware, devTools()) as GenericStoreEnhancer;
  }
}

export default createStore<ReduxState>(reducers, middleware);
