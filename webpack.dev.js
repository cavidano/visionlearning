const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const devPages = {
    'Accordion': 'accordion',
    'AudioPlayer': 'audio-player',
    'Button': 'button',
    'Color': 'color',
    'CompCheck': 'comp-check',
    'DisciplineGrid': 'discipline-grid',
    'Form': 'form',
    'Figure': 'figure',
    'Grid': 'grid',
    'HeaderFooter': 'header-footer',
    'Lightbox': 'lightbox',
    'List': 'list',
    'Navigation': 'navigation',
    'ReadingToggles': 'reading-toggles',
    'Typography': 'typography',
    'Tab': 'tab',
    'Search': 'search',
    'Quiz': 'quiz'
}

const devDir = './_tearsheet';

const devPage = `${devPages.Typography}.html`;

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-cheap-source-map',
    target: 'web',
    devServer: {
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