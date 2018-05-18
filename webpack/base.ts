import * as path from 'path';
import * as webpackMerge from 'webpack-merge';

const srcPath = (p: string) => path.resolve(__dirname, '..', 'src/', p);

const baseConfig: any = {
  mode: 'production',
  devtool: 'cheap-source-map',
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    publicPath: '/',
    filename: '[name].js',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'initial',
        },
      },
      // Files will invalidate i. e. when more chunks with the same vendors are added.
      // medium.com/webpack/webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization-be739a861366
      name: false,
    },
    // Keep the runtime chunk seperated to enable long term caching
    // https://twitter.com/wSokra/status/969679223278505985
    runtimeChunk: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            babelrc: true,
            plugins: ['react-hot-loader/babel'],
          },
        }, {
          loader: 'awesome-typescript-loader',
          options: {
            compilerOptions: {
              module: 'commonjs',
              target: 'es2015',
            },
          },
        }],
      },
      {
        test: /\.svg$/,
        oneOf: [
          {
            resource: /external/,
            loader: 'url-loader',
            query: {
              limit: 10000,
              name: 'static/[name].[ext]',
            },
          },
          {
            loader: ['babel-loader', { loader: 'svg-react-loader' }],
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        oneOf: [
          {
            resource: /external/,
            loader: 'file-loader',
            query: { name: 'static/[name].[ext]' },
          },
          {
            loader: 'url-loader',
            query: {
              limit: 10000,
              name: 'static/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.json$/,
        loader: 'file-loader',
        query: { name: '[name].json' },
        type: 'javascript/auto',
      },
      {
        exclude: [
          /\.js$/,
          /\.tsx?$/,
          /\.css$/,
          /\.svg$/,
          /\.(jpe?g|png|gif)$/i,
          /\.json$/,
          /\.html/,
        ],
        loader: 'file-loader',
        query: { name: 'static/[name].[ext]' },
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.ts', '.tsx'],
    alias: {
      app: srcPath('app'),
      common: srcPath('app/components/common'),
      components: srcPath('app/components'),
      config: srcPath('config'),
      ducks: srcPath('app/ducks'),
      fonts: srcPath('app/static/fonts'),
      images: srcPath('app/static/images'),
      modules: srcPath('app/components/modules'),
      server: srcPath('server'),
      services: srcPath('app/services'),
      styles: srcPath('app/styles'),
      vectors: srcPath('app/static/vectors'),
      'styled-components': srcPath('app/services/styled-components.ts'),
    },
  },
};

export default baseConfig;

export const merge = (...config) => webpackMerge(baseConfig, ...config);
