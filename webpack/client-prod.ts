import * as webpack from 'webpack';
import * as path from 'path';
import { omit } from 'lodash';
// import BundleAnalyzerPlugin from 'webpack-bundle-analyzer'.BundleAnalyzerPlugin;
import globals from '../src/config/globals';
import webpackConfig from './base';

const packg = require('../package.json');

// select the vendors you want to include in the vendors chunk
// omit packages you don't want to include
const vendors = Object.keys(omit(packg.dependencies, [
    'compression',
    'express',
    'prop-types',
]));

const prodConfig: webpack.Configuration = {
    ...webpackConfig,
    name: 'client',
    entry: {
        app: [
            'babel-polyfill',
            path.resolve(__dirname, '..', 'src'),
        ],
    },
    plugins: [
        new webpack.DefinePlugin(globals('client')),
        new webpack.optimize.ModuleConcatenationPlugin(),
        // new BundleAnalyzerPlugin(),
    ],
    optimization: {
        // Automatically split vendor and commons
        // https://twitter.com/wSokra/status/969633336732905474
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: 'vendors',
                    test: new RegExp(
                        vendors.reduce((str, vendor) => `${str}|${vendor}`, '^.*(') + ')$',
                        'gi',
                    ),
                    chunks: 'initial',
                    enforce: true,
                },
            },
            // Files will invalidate i. e. when more chunks with the same vendors are added.
            // tslint:disable-next-line:max-line-length
            // https://medium.com/webpack/webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization-be739a861366
            name: false,
        },
        // Keep the runtime chunk seperated to enable long term caching
        // https://twitter.com/wSokra/status/969679223278505985
        runtimeChunk: true,
    },
    node: {
        fs: 'empty',
    },
};

module.exports = prodConfig;
