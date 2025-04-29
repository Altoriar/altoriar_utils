const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.ts',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'altoriar_utils.js',
		library: 'altoriar_utils',
		libraryTarget: 'umd',
		globalObject: 'this', // 兼容 Node.js 和浏览器
		environment: {
			arrowFunction: false,
			const: false,
		},
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-env',
							{
								targets: {
									chrome: '30',
									edge: '17',
									firefox: '60',
									safari: '11.1',
								},
								corejs: 3,
								useBuiltIns: 'usage',
							},
						],
					},
				},
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	plugins: [new CleanWebpackPlugin()],
};
