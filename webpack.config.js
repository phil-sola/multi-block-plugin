const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );

module.exports = {
	...defaultConfig,

	entry: {
		"block-one": "./src/block-library/block-one/index.js",
		"block-two": "./src/block-library/block-two/index.js",
	}
}

