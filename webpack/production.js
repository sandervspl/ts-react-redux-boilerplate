const webpack = require('webpack');
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const globals = require('../src/config/globals');
const webpackConfig = require('./base');

module.exports = {
    ...webpackConfig,
    name: 'client',
    entry: [
        'babel-polyfill',
        path.resolve(__dirname, '..', 'src'),
    ],
    plugins: [
        new webpack.DefinePlugin(globals('client')),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new BundleAnalyzerPlugin(),
    ],
    optimization: {
        ...webpackConfig.optimization,
        // Automatically split vendor and commons
        // https://twitter.com/wSokra/status/969633336732905474
        splitChunks: {
            chunks: 'all',
            // Files will invalidate i. e. when more chunks with the same vendors are added.
            // https://medium.com/webpack/webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization-be739a861366
            name: false,
        },
        // Keep the runtime chunk seperated to enable long term caching
        // https://twitter.com/wSokra/status/969679223278505985
        runtimeChunk: true,
    },
};
