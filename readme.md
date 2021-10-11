# Multi blocks plugin

Coming up with a clean solution to converting the current @wordpress/create-block
package installation over to accommodating multiple blocks in a single plugin has
proven harder than initially thought & I believe the real work needs to come from the
package itself now. There is simply too much going on behind the scenes in terms of
config to completely get the ideal solution.

This latest iteration is the cleanest, simplest solution I have personally been able
to get working so far. The latest version gives individual outputs for each block
helping with enqueueing files only when required.

## Ideal Solution (IMO)

What I would have liked to achieve would be a cleaner build file organised by blocks
for all files.

For example...

 ```bash
    build
     - block-one
      - index.js
      - index.css
      - style-index.css
      - index.asset.php
     - block-two
      - etc etc
```

It's not quite as clean as I would like but I am happy to have multiple entry points
configured within webpack config rather than creating multiple npm scripts inside the
package.json file - it certainly works for now.

## @WordPress/create-block
I highly recommend utilising the @wordpress/create-block package for developing custom
blocks as it takes care of everything you need such as webpack, babel, and comes with
the excellent @WordPress/scripts package as well.

The official documentation for the WordPress package this is based on can be found
[here](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block/)

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
5. Create as many custom blocks as you like... don't forget to update the webpack
   config file and the root php file.

## Contributing
If anyone knows of a better way to configure everything within webpack to make this
even slicker, I would be very happy for pull requests and contributions to this.

## License
[GPL2 or Later](https://www.gnu.org/licenses/old-licenses/gpl-2.0.html)
