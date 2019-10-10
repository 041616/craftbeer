const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = function(env, options) {
    const mode = options.mode;
    return {
        entry: './source/js/index.jsx',
        output: {
            path: path.join(__dirname, '/public'),
            filename: 'craftbeer.js'
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
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.jsx'],
            alias: {
                components: 'source/js/components',
                pages: 'source/js/pages',
                utils: 'source/js/utils',
            }
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './source/html/index.html',
                inject: 'head',
                minify: mode === 'production',
                hash: mode === 'production',
            })
        ]
    }
};
