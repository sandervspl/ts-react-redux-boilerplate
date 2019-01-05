import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './manifest.json';

const render = () => {
  const Root = require('app/components/Root').default;
  ReactDOM.render(<Root />, document.getElementById('app'));
};

if (__DEV__ && module.hot) {
  module.hot.accept('app/components/Root', render);
}

render();
