import 'react-hot-loader/patch';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import registerServiceWorker from './serviceWorker';
import './manifest.json';

import Root from 'components/Root';

if (!global._babelPolyfill) {
    require('babel-polyfill');
}

const render = (Element: any) => {
    ReactDOM.hydrate(<Element />, document.getElementById('app'));
};

if (__DEV__ && module.hot) {
    module.hot.accept(() => {
        const NextApp = require('./app/components/Root').default;
        render(
            <AppContainer>
                <NextApp />
            </AppContainer>
        );
    });
}

render(Root);
registerServiceWorker();
