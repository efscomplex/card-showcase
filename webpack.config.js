const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const BASE_DIR = path.join(__dirname, './src')
const DIST_DIR = path.join(__dirname, './dist')

module.exports = {
	entry: path.resolve(__dirname, './src/www/index.tsx'),
	output: {
		filename: 'index.js',
		path: DIST_DIR,
		publicPath: DIST_DIR
	},
	devServer: {
		port: process.env.PORT || 8080,
		historyApiFallback: true
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				loader: 'esbuild-loader',
				options: {
					loader: 'tsx',
					target: 'es2015'
				},
				include: [BASE_DIR],
				exclude: [/node_modules/, /__tests__/]
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(s[ac]ss)$/i,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							// Prefer `dart-sass`
							implementation: require('sass')
						}
					}
				]
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource'
			}
		]
	},
	resolve: {
		extensions: [
			'.tsx',
			'.ts',
			'.js',
			'.jsx',
			'.png',
			'.svg',
			'.scss',
			'.css'
		],
		modules: [BASE_DIR, 'node_modules'],
		alias: {
			'@': [path.join(BASE_DIR, 'www')],
			public: [path.join(BASE_DIR, 'www/public')]
		}
	},
	plugins: [
		new Dotenv(),
		new HTMLWebpackPlugin({ template: './src/www/public/index.html' })
	]
}
