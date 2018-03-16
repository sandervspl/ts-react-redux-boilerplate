const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpackProdConfig = require('./webpack.config.prod');
const globals = require('./src/config/globals');

module.exports = {
    name: 'server',
    mode: 'production',
    devtool: 'cheap-source-map',
    target: 'node',
    node: { __dirname: true },
    externals: [nodeExternals({ whitelist: /\.(?!js(\?|$))([^.]+(\?|$))/ })],
    entry: ['./src/server/index.ts'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.js',
        publicPath: '/',
    },
    optimization: {
        minimizer: webpackProdConfig.optimization.minimizer,
        splitChunks: false,
        runtimeChunk: false,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: ["babel-loader", { loader: "ts-loader" }],
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
                    /\.tsx?$/,
                    /\.css$/,
                    /\.svg$/,
                    /\.(jpe?g|png|gif)$/i,
                    /\.json$/,
                ],
                loader: 'file-loader',
                query: { name: 'static/[name].[ext]' },
            },
        ],
    },
    plugins: [new webpack.DefinePlugin(globals('server'))],
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
    }
};
