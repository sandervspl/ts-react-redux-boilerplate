import * as webpack from 'webpack';
import * as path from 'path';
// import BundleAnalyzerPlugin from 'webpack-bundle-analyzer'.BundleAnalyzerPlugin;
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import globals from '../src/config/globals';
import { merge } from './base';
import { SSR } from '../src/config';

const prodConfig: any = merge({
  name: 'client',
  entry: {
    app: path.resolve(__dirname, '..', 'src/index.tsx'),
  },
  plugins: [
    new webpack.DefinePlugin(globals('client')),
    // only include html file if server-side render is disabled
    SSR ? () => {} : new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, '..', 'src/index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    // new BundleAnalyzerPlugin(),
  ],
});

module.exports = prodConfig;
