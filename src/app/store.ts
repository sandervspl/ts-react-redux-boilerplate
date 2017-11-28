import { combineReducers, createStore, applyMiddleware, compose, GenericStoreEnhancer } from 'redux';
import thunk from 'redux-thunk';
import { appReducers, IReduxStore } from 'app/ducks';

let middleware = applyMiddleware(thunk);
const reducers = combineReducers<IReduxStore>(appReducers);

/*
 * __NOTE: ignoring data's type or interface
 * Force "window" to be of type "any" so we can use custom keys like "devToolsExtension"
 * The reason it will give an error otherwise is the interface of "window" does not have the
 * "devToolsExtension" in it. Declaring it as "any" will release it of its interface.
 * Be careful when doing this! Only do this when you know 100% that it will work.
 */
const w = window as any;

if (__DEV__ && __CLIENT__ && typeof w.devToolsExtension === 'function') {
    middleware = compose(middleware, w.devToolsExtension()) as GenericStoreEnhancer;
}

export const store = createStore<IReduxStore>(reducers, middleware);
