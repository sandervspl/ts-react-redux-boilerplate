import 'react-hot-loader/patch';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import globalStyle from 'styles/global';

import Root from 'components/Root';

const mod = module as any;

const render = (Element: any) => {
    globalStyle();
    ReactDOM.hydrate(<Element />, document.getElementById('app'));
};

if (__DEV__ && mod.hot) {
    mod.hot.accept(() => {
        const NextApp = require('./app/components/Root').default;
        render(
            <AppContainer>
                <NextApp />
            </AppContainer>
        );
    });
}

render(Root);
