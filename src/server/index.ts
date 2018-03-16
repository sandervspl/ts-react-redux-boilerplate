import * as express from 'express';
import { port, SSR } from '../config';

const app = express();

if (process.env.NODE_ENV === 'development') {
    const webpack = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const config = require('../../webpack.config.js');
    const renderFullPage = require('./helpers/renderFullPage');

    const compiler = webpack(config);

    app.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
        historyApiFallback: true,
        hot: true,
        noInfo: true,
        headers: { 'Access-Control-Allow-Origin': '*' },
        stats: { colors: true },
        serverSideRender: true,
    }));

    app.use(webpackHotMiddleware(compiler));

    app.get('*', (req, res) => {
        res.send(renderFullPage({}));
    });
} else {
    const path = require('path');
    const compress = require('compression');
    const render = require('./helpers/render');

    app.use(compress());
    app.use(express.static(path.resolve(__dirname, '../../dist')));
    app.use(render(SSR));
}

app.listen(port, () => {
    // tslint:disable:no-console
    console.log(`[${process.env.NODE_ENV}] server running on http://localhost:${port}/`);
});
