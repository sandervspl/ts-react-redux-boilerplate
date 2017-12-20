import * as React from 'react';
import { store } from 'app/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from 'styles/theme';
import 'app/static/favicon.ico';

import App from './App';

const Root: React.StatelessComponent = () => (
    <Provider store={store}>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </Provider>
);

export default Root;
