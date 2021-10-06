# Multi blocks plugin

Utilising the excellent `@wordpress/create-block` package, with some slight changes to
the folder structure and setup to accommodate multiple blocks in the single WordPress
plugin. This approach does not require *any* changes to the default package.json
file or build & start scripts.

The official documentation for the WordPress package this is based on can be found
[here](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block/)

## @WordPress/create-block
I highly recommend utilising the @wordpress/create-block package for developing custom
blocks as it takes care of everything you need such as webpack, babel, and comes with
the excellent @WordPress/scripts package as well.

Let's get you set up...

## Installation

1. Clone the project to your desired location
2. Open the command line in the project folder and install the packages:

    ```bash
    npm install
    ```
3. Wait for this to finish running and adding all the dependencies...
4. ```bash
    npm start
    ```

## How it Works

The inspiration here is taken from the core gutenberg plugin. Within the src folder I
have created a couple of subfolders to get you started:

 - block-library
 - components

with a root index.js file.

The root index.js file is simply importing all the individual blocks, adding them to
an array and them looping through them while calling the registerBlockType() function.

Within the block-library folder is where all the custom blocks will live. I have
created two identical dummy blocks to kick us off and to help show the setup.

As we are now registering all blocks centrally inside the root index.js file (as
described above), the index.js file within each block folder is simply setting
everything up to be imported into the main index.js file.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[GPL2 or Later](https://www.gnu.org/licenses/old-licenses/gpl-2.0.html)
