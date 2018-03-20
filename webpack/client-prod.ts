import * as webpack from 'webpack';
import * as path from 'path';
// import BundleAnalyzerPlugin from 'webpack-bundle-analyzer'.BundleAnalyzerPlugin;
import globals from '../src/config/globals';
import { merge } from './base';

const prodConfig: any = merge({
    name: 'client',
    entry: {
        app: [
            'babel-polyfill',
            path.resolve(__dirname, '..', 'src'),
        ],
    },
    optimization: {
        concatenateModules: true,
        // Keep the runtime chunk seperated to enable long term caching
        // https://twitter.com/wSokra/status/969679223278505985
        runtimeChunk: true,
    },
    plugins: [
        new webpack.DefinePlugin(globals('client')),
        // new BundleAnalyzerPlugin(),
    ],
});

module.exports = prodConfig;
