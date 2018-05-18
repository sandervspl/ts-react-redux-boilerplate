import * as webpack from 'webpack';
import * as path from 'path';
import { CheckerPlugin } from 'awesome-typescript-loader';
import globals from '../src/config/globals';
import { merge } from './base';

const devConfig: any = merge({
  name: 'client',
  mode: 'development',
  devtool: 'eval-source-map',
  entry: {
    app: [
      'webpack-hot-middleware/client?reload=true&noInfo=true',
      path.resolve(__dirname, '..', 'src/index.tsx'),
    ],
  },
  output: {
    publicPath: path.resolve(__dirname, '..', '/dist/'),
  },
  plugins: [
    new CheckerPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin(globals('client')),
  ],
});

module.exports = devConfig;
