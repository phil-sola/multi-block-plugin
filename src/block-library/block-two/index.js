import './style.scss';
import edit from './edit';
import save from './save';
import metadata from './block.json';

const { name } = metadata;
export { metadata, name };


export const settings = {

	edit: edit,

	save: save,
};
