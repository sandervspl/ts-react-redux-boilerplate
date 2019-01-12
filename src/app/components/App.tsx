import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import { GlobalStyle } from 'styles';

import { Test } from './modules';

const App = () => (
  <main>
    <GlobalStyle />
    <React.Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/" component={Test} />
      </Switch>
    </React.Suspense>
  </main>
);

export default withRouter(App);
