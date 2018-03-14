const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const globals = require('./src/config/globals');
const webpackConfig = require('./webpack.config');

module.exports = {
    name: 'client',
    mode: 'production',
    devtool: 'cheap-source-map',
    entry: [
        'babel-polyfill',
        path.resolve(__dirname, 'src'),
    ],
    output: {
        path: webpackConfig.output.path,
        filename: webpackConfig.output.filename,
        publicPath: '/',
    },
    optimization: {
        minimizer: [
            new UglifyJSPlugin({
                uglifyOptions: {
                    ecma: 8,
                    compress: {
                        warnings: false,
                        // Disabled because of an issue with Uglify breaking seemingly valid code:
                        // https://github.com/facebook/create-react-app/issues/2376
                        // Pending further investigation:
                        // https://github.com/mishoo/UglifyJS2/issues/2011
                        comparisons: false,
                    },
                    mangle: {
                        safari10: true,
                    },
                    output: {
                        comments: false,
                        // Turned on because emoji and regex is not minified properly using default
                        // https://github.com/facebook/create-react-app/issues/2488
                        ascii_only: true,
                    },
                },
                // Use multi-process parallel running to improve the build speed
                // Default number of concurrent runs: os.cpus().length - 1
                parallel: true,
                // Enable file caching
                cache: true,
                sourceMap: true,
            }),
        ],
        // Automatically split vendor and commons
        // https://twitter.com/wSokra/status/969633336732905474
        splitChunks: {
            chunks: 'all',
        },
        // Keep the runtime chunk seperated to enable long term caching
        // https://twitter.com/wSokra/status/969679223278505985
        runtimeChunk: true,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
            },
            {
                test: /\.svg$/,
                loader: 'babel-loader!svg-react-loader',
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loader: 'url-loader?limit=10000&name=images/[hash].[ext]',
            },
            {
                exclude: [
                    /\.jsx?$/,
                    /\.tsx?$/,
                    /\.svg$/,
                    /\.(jpe?g|png|gif)$/i,
                    /\.json$/,
                ],
                loader: 'file-loader',
                query: { name: 'static/[name].[ext]' },
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin(globals('client')),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new BundleAnalyzerPlugin(),
    ],
    resolve: webpackConfig.resolve,
};
