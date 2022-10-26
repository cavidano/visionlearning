const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const devPages = {
    'Accordion': 'accordion',
    'AudioPlayer': 'audio-player',
    'DisciplineGrid': 'discipline-grid',
    'HeaderFooter': 'header-footer',
    'Lightbox': 'lightbox',
    'ReadingToggles': 'reading-toggles',
    'Module': 'module',
    'Typography': 'typography',
    'Quiz': 'quiz',
    'CompCheck': 'comp-check'
}

const devDir = './_tearsheet';

const devPage = `${devPages.AudioPlayer}.html`;

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-cheap-source-map',
    target: 'web',
    devServer: {
        port: 8081, 
        hot: true,
        open: true,
        static: {
            directory: path.resolve(__dirname, devDir),
            staticOptions: {
                index: devPage
            },
        }
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/
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
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `./${devDir}/${devPage}`,
            inject: 'body'
        })
    ]
});