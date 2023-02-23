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
4. NodeJS modules (installed via npm) are available for each app directory.<br>
   - client, webserver and webserver-kmz

## Installation

1. Clone this repository.<br>
`git clone https://github.com/ciatph/webmap-kmz.git`

2. Install dependencies on all app directories.<br>
`npm install`

3. Run the localhost static website:<br>
`npm run client:dev`

4. View available NPM scripts in the [Available Scripts](#available-scripts) section for more information.

## Available Scripts

### `npm install`

Installs nodejs dependencies on the **/client**, **/webserver** and **/webserver-kmz** directories.

### `npm start`

Build the client app and run it on the production web server.<br>
This requires the **/dist** directory output from the `npm run client:build` script.

### `npm run client:dev`

Run the simple localhost static website development environment with live reload using webpack.

### `npm run client:build`

Build the simple localhost static website for production mode using webpack.<br>
Built files are placed in the `/dist` directory.

### `npm run client:lint`

Check lint errors on the **/client** directory.

### `npm run client:lint:fix`

Fix lint errors on the **/client** directory.

### `npm run kmz:server:dev`

Run the KMZ express server in development load with live reload using nodemon.

### `npm run kmz:server:prod`

Run the KMZ express server for production mode.

### `npm run kmz:server:lint`

Check lint errors on the **/webserver-kmz** directory.

### `npm run kmz:server:lint:fix`

Fix lint errors on the **/webserver-kmz** directory.

### `npm run webserver:lint`

Check lint errors on the **/webserver** directory.

### `npm run webserver:lint:fix`

Fix lint errors on the **/webserver** directory.

### `npm run lint:all`

Check lint errors on the **client**, **webserver** and **webserver-kmz** directories.

### `npm run lint:fix:all`

Fix lint errors on the **client**, **webserver** and **webserver-kmz** directories.

@ciatph<br>
20230224
