const webpack = require('webpack');
const path = require('path');
const globals = require('../src/config/globals');
const webpackConfig = require('./base');

module.exports = {
    ...webpackConfig,
    name: 'client',
    mode: 'development',
    devtool: 'eval-source-map',
    entry: [
        'webpack-hot-middleware/client?reload=true&noInfo=true',
        'babel-polyfill',
        path.resolve(__dirname, '..', 'src/index.tsx'),
    ],
    output: {
        ...webpackConfig.output,
        filename: 'bundle.js',
        publicPath: path.resolve(__dirname, '..', '/dist/'),
    },
    optimization: {},
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin(globals('client')),
        new webpack.NoEmitOnErrorsPlugin(),
    ],
};
