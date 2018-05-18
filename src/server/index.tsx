import * as React from 'react';
import * as express from 'express';
import { port, SSR } from 'config';
import { ServerStyleSheet } from 'styled-components';

const renderFullPage = require('./helpers/renderFullPage');

const app = express();

if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const clientConfig = require('../../webpack/client-dev');
  const serverConfig = require('../../webpack/server');

  const compiler = webpack([clientConfig, serverConfig]);

  app.use(webpackDevMiddleware(compiler, {
    publicPath: clientConfig.output.publicPath,
    historyApiFallback: true,
    hot: true,
    noInfo: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    stats: { colors: true },
  }));

  const clientCompiler = compiler.compilers.find(c => c.name === 'client');
  app.use(webpackHotMiddleware(clientCompiler));

  app.get('*', (req, res) => {
    res.status(200).send(renderFullPage({}));
  });
} else {
  const path = require('path');
  const compress = require('compression');
  const { renderToString } = require('react-dom/server');
  const ServerRoot = require('./helpers/ServerRoot').default;

  app.use(compress());
  app.use(express.static(path.resolve(__dirname, '../../dist')));

  app.use((req, res) => {
    const sheet = new ServerStyleSheet();
    const styleTags = sheet.getStyleTags();

    const html = SSR
      ? renderToString(<ServerRoot location={req.url} sheet={sheet.instance}/>)
      : ' ';

    res.status(200).send(renderFullPage({ html, styleTags }));
  });
}

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`[${process.env.NODE_ENV}] server running on http://localhost:${port}/`);
});
