const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const globals = require('./src/config/globals');
const webpackConfig = require('./webpack.config');

module.exports = {
    name: 'client',
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
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'awesome-typescript-loader',
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
                options: { name: 'static/[name].[ext]' },
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin(globals('client')),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new UglifyJSPlugin(),
    ],
    resolve: webpackConfig.resolve,
};
