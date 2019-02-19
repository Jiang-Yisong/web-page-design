const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					'style-loader', // creates style nodes from JS strings
					'css-loader',   // translates CSS into CommonJS
					'sass-loader'   // compiles Sass to CSS, using Node Sass by default
				]
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist')
	}
};
