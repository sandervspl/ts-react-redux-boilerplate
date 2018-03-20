import * as webpack from 'webpack';
import * as path from 'path';
import globals from '../src/config/globals';
import baseConfig from './base';

const devConfig: webpack.Configuration = {
    ...baseConfig,
    name: 'client',
    mode: 'development',
    devtool: 'eval-source-map',
    entry: {
        app: [
            'webpack-hot-middleware/client?reload=true&noInfo=true',
            'babel-polyfill',
            path.resolve(__dirname, '..', 'src/index.tsx'),
        ],
    },
    output: {
        ...baseConfig.output,
        publicPath: path.resolve(__dirname, '..', '/dist/'),
    },
    optimization: {
        noEmitOnErrors: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin(globals('client')),
    ],
};

module.exports = devConfig;
