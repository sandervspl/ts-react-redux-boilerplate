const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const globals = require('../src/config/globals');
const webpackConfig = require('./base');

module.exports = {
    ...webpackConfig,
    name: 'server',
    entry: [
        path.resolve(__dirname, '..', 'src/server'),
    ],
    output: {
        ...webpackConfig.output,
        filename: 'server.js',
    },
    plugins: [new webpack.DefinePlugin(globals('server'))],
    target: 'node',
    node: { __dirname: true },
    externals: [nodeExternals({ whitelist: /\.(?!js(\?|$))([^.]+(\?|$))/ })],
};
