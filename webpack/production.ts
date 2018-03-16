import * as webpack from 'webpack';
import * as path from 'path';
// import BundleAnalyzerPlugin from 'webpack-bundle-analyzer'.BundleAnalyzerPlugin;
import globals from '../src/config/globals';
import webpackConfig from './base';

const prodConfig: webpack.Configuration = {
    ...webpackConfig,
    name: 'client',
    entry: [
        'babel-polyfill',
        path.resolve(__dirname, '..', 'src'),
    ],
    plugins: [
        new webpack.DefinePlugin(globals('client')),
        new webpack.optimize.ModuleConcatenationPlugin(),
        // new BundleAnalyzerPlugin(),
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

module.exports = prodConfig;
