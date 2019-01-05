/* tslint:disable no-console */
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const { port } = require('./src/config');
const config = require('./webpack/dev.ts');

const app = express();
const compiler = webpack(config);

const middleware = webpackMiddleware(compiler, {
  logLevel: 'error',
  headers: { 'Access-Control-Allow-Origin': '*' },
  stats: { colors: true },
});

app.use(middleware);
app.use(webpackHotMiddleware(compiler));

app.get('*', (req, res) => {
  const htmlBuffer = middleware.fileSystem.readFileSync(`${config.output.path}/index.html`);
  res.send(htmlBuffer.toString());
});

app.listen(port.client, () => {
  console.log(`Listening at http://localhost:${port.client}/`);
});
