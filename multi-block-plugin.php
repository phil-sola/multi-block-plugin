<?php
/**
 * Plugin Name:       Multi Block Plugin
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       multi-block-plugin
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 *
 */

add_filter( 'should_load_separate_core_block_assets', '__return_true' );


function create_block_multi_block_plugin_block_init() {
	$blocks = array(
			'block-one/',
			'block-two/'
	);

	foreach($blocks as $block) {
		register_block_type( plugin_dir_path( __FILE__ ) . '/src/block-library/' . $block );
	}
}
add_action( 'init', 'create_block_multi_block_plugin_block_init' );
