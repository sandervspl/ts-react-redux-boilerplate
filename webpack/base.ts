import * as webpack from 'webpack';
import * as path from 'path';

const srcPath = (p: string) => path.resolve(__dirname, '..', 'src/', p);

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
                oneOf: [
                    {
                        resource: /external/,
                        loader: 'url-loader?limit=10000',
                        query: { limit: 10000 },
                        oneOf: [],
                    },
                    {
                        loader: 'babel-loader!svg-react-loader',
                        oneOf: [],
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
                        oneOf: [],
                    },
                    {
                        loader: 'url-loader',
                        query: { limit: 10000 },
                        oneOf: [],
                    },
                ],
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
                oneOf: [],
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
