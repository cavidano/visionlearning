const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const devDir = './_tearsheet';
const devIndex = 'color.html';

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-cheap-source-map',
    target: 'web',
    stats: {
        children: false
    },
    devServer: {
        port: 8080,
        contentBase: path.resolve(__dirname),
        index: devIndex
    }, 
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            injectType: 'singletonStyleTag'
                        },
                    },
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|jpg|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 1,
                    name: "[name].[ext]",
                    publicPath: '/images'
                }
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `./${devDir}/${devIndex}`,
            filename: devIndex,
            inject: 'body'
        })
    ]
});