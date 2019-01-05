import * as i from 'types';
import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';

import { Test } from './modules';

const App = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route path="/lobby" component={Test} />
    </Switch>
  </React.Suspense>
);

interface AppProps extends i.RouteComponentProps {}

export default withRouter(App);
