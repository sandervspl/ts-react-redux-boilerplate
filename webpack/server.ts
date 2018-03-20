import * as webpack from 'webpack';
import * as path from 'path';
import * as nodeExternals from 'webpack-node-externals';
import globals from '../src/config/globals';
import baseConfig from './base';

const serverConfig: webpack.Configuration = {
    ...baseConfig,
    name: 'server',
    entry: {
        server: path.resolve(__dirname, '..', 'src/server/index.tsx'),
    },
    plugins: [new webpack.DefinePlugin(globals('server'))],
    target: 'node',
    node: {
        __dirname: true,
    },
    externals: [
        nodeExternals({
            whitelist: /\.(?!js(\?|$))([^.]+(\?|$))/,
        }),
    ],
};

module.exports = serverConfig;
