import * as webpack from 'webpack';
import * as path from 'path';
import * as nodeExternals from 'webpack-node-externals';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import globals from './globals';
import { merge } from './base';

const prodConfig: webpack.Configuration = merge({
  name: 'client',
  mode: 'production',
  entry: {
    app: [
      '@babel/polyfill',
      path.resolve('src/index.tsx'),
    ],
  },
  output: {
    publicPath: '/',
  },
  plugins: [
    new webpack.DefinePlugin(globals),
  ],
});

const serverConfig: webpack.Configuration = {
  name: 'server',
  mode: 'production',
  target: 'node',
  node: {
    __dirname: true,
  },
  entry: {
    server: [path.resolve('src/server.ts')],
  },
  externals: [
    nodeExternals({ whitelist: /\.(?!js(\?|$))([^.]+(\?|$))/ }),
  ],
  resolve: {
    extensions: ['*', '.js', '.ts', '.tsx'],
    plugins: [
      new TsconfigPathsPlugin(),
    ],
  },
  plugins: [
    new webpack.DefinePlugin(globals),
  ],
};

module.exports = [prodConfig, serverConfig];
