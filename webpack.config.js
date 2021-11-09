const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const LiveReloadPlugin = require( 'webpack-livereload-plugin' );
const DependencyExtractionWebpackPlugin = require( '@wordpress/dependency-extraction-webpack-plugin' );
const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' );
const path = require( 'path' );
const glob = require('glob');

const isProduction = process.env.NODE_ENV === 'development';

const getLiveReloadPort = ( inputPort ) => {
	const parsedPort = parseInt( inputPort, 10 );
	return Number.isInteger( parsedPort ) ? parsedPort : 35729;
};

function getEntries() {
	const out = {};
	glob.sync("./src/block-library/**/index.js").forEach(entry => {
		out[entry.split('/')[3]] = entry;
	});
	return out;
};


module.exports = {
	...defaultConfig,
	entry: getEntries,
	output: {
		filename: 'js/[name]/[name].js',
		path: path.resolve(process.cwd(), 'build')
	},
	module: {
		...defaultConfig.module,
		rules: [
			...defaultConfig.module.rules,
			{
				test: /\.(sc|sa)ss$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
			}
		],
	},
	plugins: [
		new CleanWebpackPlugin({
			cleanAfterEveryBuildPatterns: ['!fonts/**', '!images/**'],
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name].css'
		}),
		process.env.WP_BUNDLE_ANALYZER && new BundleAnalyzerPlugin(),
		!isProduction &&
		new LiveReloadPlugin({
			port: getLiveReloadPort(process.env.WP_LIVE_RELOAD_PORT),
		}),
		!process.env.WP_NO_EXTERNALS &&
		new DependencyExtractionWebpackPlugin(),
	].filter(Boolean)
}
