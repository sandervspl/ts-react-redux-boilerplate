import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './serviceWorker';
import './manifest.json';

import Root from 'components/Root';
import { SSR } from 'config/index';

if (!global._babelPolyfill) {
  require('@babel/polyfill');
}

const app = document.getElementById('app');

if (__DEV__ || !SSR) {
  ReactDOM.render(<Root/>, app);
} else {
  ReactDOM.hydrate(<Root/>, app);
}

registerServiceWorker();
