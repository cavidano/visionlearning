const { IgnorePlugin } = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
	mode: 'production',
	target: 'browserslist',
	output: {
		filename: 'js/[name].js',
		path: path.resolve(__dirname, 'dist'),
		iife: true,
	},
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					compress: {
						drop_console: true,
					},
				},
			}),
		],
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [['@babel/preset-env']],
						plugins: [
							'@babel/plugin-transform-shorthand-properties',
						],
					},
				},
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [['autoprefixer']],
							},
						},
					},
					'sass-loader',
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'css/[name].css',
		}),
		new CssMinimizerPlugin(),
        new IgnorePlugin({
            resourceRegExp: /\.(jpg|png|svg)$/
        }),
	],
});