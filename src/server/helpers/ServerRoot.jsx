import React from 'react';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import store from 'app/store';
import App from 'components/App';

import { theme, globalStyles } from 'styles';

globalStyles();

const ServerRoot = ({ location, sheet }) => (
    <Provider store={store}>
        <StyleSheetManager sheet={sheet}>
            <ThemeProvider theme={theme}>
                <StaticRouter location={location} context={{}}>
                    <App />
                </StaticRouter>
            </ThemeProvider>
        </StyleSheetManager>
    </Provider>
);

export default ServerRoot;
