import * as webpack from 'webpack';
import * as path from 'path';

const srcPath = p => path.resolve(__dirname, '..', 'src/', p);

const baseConfig: webpack.Configuration = {
    mode: 'production',
    devtool: 'cheap-source-map',
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        publicPath: '/',
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader', {
                    loader: 'ts-loader',
                    options: {
                        compilerOptions: {
                            module: 'commonjs',
                            target: 'esnext',
                        },
                    },
                }],
            },
            {
                test: /\.svg$/,
                use: ['babel-loader', { loader: 'svg-react-loader' }],
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loader: 'url-loader',
                query: { limit: 10000 },
            },
            {
                exclude: [
                    /\.js$/,
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
        },
    },
};

export default baseConfig;
