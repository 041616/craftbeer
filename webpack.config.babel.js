import * as path from 'path';
import TerserJSPlugin from 'terser-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { HTML_TEMPLATES_SETTINGS } from './source/js/utils/pages';
import variables from './postcss.variables';


function htmlTemplatePages(mode) {
    return Object.keys(HTML_TEMPLATES_SETTINGS).map((filename) => new HtmlWebpackPlugin({
        filename: `${filename}.html`,
        template: './source/html/index.html',
        inject: 'head',
        minify: mode === 'production',
        templateParameters: {
            themeColor: variables['base-background-color'],
            ...HTML_TEMPLATES_SETTINGS[filename]
        }
    }));
}


export default function(env, { mode }) {
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
                    test: /\.svg$|.jpg$|.png$/,
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            publicPath: 'img/',
                            outputPath: '../public/img',
                        },
                    },
                }, {
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
                styles: path.resolve(__dirname, 'source/js/styles'),
                root: __dirname,
            }
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: mode === 'production' ? 'css/[name].[contenthash].css' : 'css/[name].css',
            }),
            ...htmlTemplatePages(mode),
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
