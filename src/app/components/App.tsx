import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { Test } from './modules';

const App: React.StatelessComponent = () => (
  <main>
    <Switch>
      <Route path="/" component={Test}/>
    </Switch>
  </main>
);

export default hot(module)(App);
