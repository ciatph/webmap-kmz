## test-kmz

Testing loading KMZ files on a LeafletJS web map.

KMZ file source: [[link]](https://www.datapages.com/gis-map-publishing-program/gis-open-files/global-framework/global-heat-flow-database/kmz-files-list)

Preview: https://ciatph.github.io/webmap-kmz

### Dependencies

The following dependecies are used for this project. Feel free to experiment using other dependencies and versions.

1. Windows 64-bit OS
2. nvm version 1.1.9 (for Windows)
3. NodeJS 16.14.2 installed using nvm
   - node v16.14.2
   - npm v8.5.0
4. NodeJS modules (installed via npm)
   - webpack 5.75.0
   - webpack-dev-server 4.11.1
   - webpack-cli 5.0.1
   - css-loader 6.7.3
   - style-loader 3.3.1
   - html-webpack-plugin 5.5.0

## Installation

1. Clone this repository.<br>
`git clone https://github.com/ciatph/webmap-kmz.git`

2. Install dependencies.<br>
`npm install`

1. Run the localhost static website:<br>
`npm run client:dev`

1. View available NPM scripts in the [Available Scripts](#available-scripts) section for more information.

## Available Scripts

### `npm start`

Run the production web server.<br>
This requires the **/dist** directory output from the `npm run client:build` script.

### `npm run client:dev`

Run the simple localhost static website development environment with live reload using webpack.

### `npm run client:build`

Build the simple localhost static website for production mode using webpack.<br>
Built files are placed in the `/dist` directory.

### `npm run kmz:server:dev`

Run the KMZ express server in development load with live reload using nodemon.

### `npm run kmz:server:prod`

Run the KMZ express server for production mode.

### `npm run lint`

Lint the client, server-kml and webserver directories.

### `npm run lint:fix`

Fix lint errors in the client, server-kml and webserver directories.

@ciatph<br>
20230224
