import * as React from 'react';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import store from 'app/store';
import App from 'components/App';

import { theme, globalStyles } from 'app/styles';

globalStyles();

export default ({ location, sheet }) => (
  <Provider store={store}>
    <StyleSheetManager sheet={sheet}>
      <ThemeProvider theme={theme}>
        <StaticRouter location={location} context={{}}>
          <App/>
        </StaticRouter>
      </ThemeProvider>
    </StyleSheetManager>
  </Provider>
);
