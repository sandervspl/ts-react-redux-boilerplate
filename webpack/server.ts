import * as webpack from 'webpack';
import * as path from 'path';
import * as nodeExternals from 'webpack-node-externals';
import globals from '../src/config/globals';
import { merge } from './base';

const serverConfig: any = merge({
  name: 'server',
  entry: {
    server: path.resolve(__dirname, '..', 'src/server/index.tsx'),
  },
  target: 'node',
  plugins: [
    new webpack.DefinePlugin(globals('server')),
  ],
  node: {
    __dirname: true,
  },
  externals: [
    nodeExternals({
      whitelist: /\.(?!js(\?|$))([^.]+(\?|$))/,
    }),
  ],
});

serverConfig.optimization = {};

module.exports = serverConfig;
