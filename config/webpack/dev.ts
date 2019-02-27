import * as webpack from 'webpack';
import * as path from 'path';
import * as ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { merge } from './base';
import globals from './globals';

const devConfig: webpack.Configuration = merge({
  name: 'client',
  mode: 'development',
  entry: {
    app: [
      'webpack-hot-middleware/client?reload=true&noInfo=true',
      '@babel/polyfill',
      path.resolve('src/index.tsx'),
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin(globals),
  ],
});

module.exports = devConfig;
