import { registerBlockType } from '@wordpress/blocks';

/**
 * Import all custom blocks here
 */
import * as blockOne from './block-library/block-one';
import * as blockTwo from './block-library/block-two';

/**
 * Add each block to an array which will be used
 * to loop through using forEach to register it
 */
const blockLibrary = () => [
	blockOne,
	blockTwo,
];



/**
 * Function to register an individual block.
 * Called by the forEach loop below
 */
const registerBlocks = ( block ) => {
	if ( ! block ) {
		return;
	}
	const { settings, metadata, name } = block;
	registerBlockType( {name, ...metadata}, settings );
};


const registerBlockLibrary = (
	blocks = blockLibrary()
) => {
	blocks.forEach( registerBlocks );
};

registerBlockLibrary();
