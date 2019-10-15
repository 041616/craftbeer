const path = require('path');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = function(env, options) {
    const mode = options.mode;
    return {
        entry: {
            craftbeer: './source/js/index.jsx'
        },
        output: {
            path: path.join(__dirname, mode === 'production' ? '/public' : '/build'),
            filename: mode === 'production' ? 'js/[name].[contenthash].js' : 'js/[name].js',
            chunkFilename: mode === 'production' ? 'js/[name].[contenthash].js' : 'js/[name].js',
        },
        devServer: {
            contentBase: [
                path.join(__dirname, 'build'),
                path.join(__dirname, 'public')
            ],
            historyApiFallback: true,
            port: 9000,
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    },
                }, {
                    test: /\.sss$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                hmr: mode === 'development',
                            }
                        }, {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                modules: {
                                    localIdentName: '[local]-[hash:base64:5]',
                                },
                                url: false
                            }
                        },
                        'postcss-loader'
                    ]
                },
            ]
        },
        resolve: {
            extensions: ['.js', '.jsx'],
            alias: {
                components: path.resolve(__dirname, 'source/js/components'),
                pages: path.resolve(__dirname, 'source/js/pages'),
                utils: path.resolve(__dirname, 'source/js/utils'),
            }
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: mode === 'production' ? 'css/[name].[contenthash].css' : 'css/[name].css',
            }),
            new HtmlWebpackPlugin({
                template: './source/html/index.html',
                inject: 'head',
                minify: mode === 'production',
            }),
        ],
        optimization: {
            minimizer: [
                new TerserJSPlugin({}),
                new OptimizeCSSAssetsPlugin({})
            ],
            runtimeChunk: 'single',
            splitChunks: {
                chunks: 'all',
                maxInitialRequests: Infinity,
                minSize: 0,
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name(module) {
                            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                            return packageName.replace('@', '');
                        },
                    },
                },
            },
        },
    }
};
