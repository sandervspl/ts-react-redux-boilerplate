import { combineReducers, createStore, applyMiddleware, compose, GenericStoreEnhancer } from 'redux';
import thunk from 'redux-thunk';
import * as api from './services/apiHelper';
import { appReducers, ReduxState } from './ducks';

let middleware = applyMiddleware(thunk.withExtraArgument(api));
const reducers = combineReducers<ReduxState>(appReducers);

interface StoreOptions {
    client: boolean;
}

export default ({ client }: StoreOptions) => {
    if (client) {
        const w = window as any;
        const devTools = w.devToolsExtension;

        if (process.env.NODE_ENV === 'development' && typeof devTools === 'function') {
            middleware = compose(middleware, devTools()) as GenericStoreEnhancer;
        }
    }

    return createStore<ReduxState>(reducers, middleware);
};
