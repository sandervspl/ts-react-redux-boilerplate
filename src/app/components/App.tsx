import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Test from './modules/Test';

const App: React.StatelessComponent = () => (
    <main>
        <Switch>
            <Route path="/" component={Test} />
        </Switch>
    </main>
);

export default App;
