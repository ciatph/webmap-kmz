## webserver-kmz

CORS-enabled Express web server for hosting KMZ files over HTTP.

KMZ file source: [[link]](https://www.datapages.com/gis-map-publishing-program/gis-open-files/global-framework/global-heat-flow-database/kmz-files-list)

Local URL: http://localhost:3002

### Dependencies

The following dependecies are used for this project. Feel free to experiment using other dependencies and versions.

1. Windows 64-bit OS
2. nvm version 1.1.9 (for Windows)
3. NodeJS 16.19.1 installed using nvm
   - node v16.19.1
   - npm v8.19.3
4. NodeJS modules (installed via npm)
   - express 4.18.2
   - cors 2.8.5
   - cookie-parser 1.4.6
   - nodemon 2.0.20

## Installation and Usage

1. Install dependencies.<br>
`npm install`

2. Run the localhost express web server for development:<br>
`npm run dev`

3. Load the localhost development website on:<br>
`http://localhost:3002`

4. Load a KMZ file:<br>
`http://localhost:3002/philippines.kmz`

5. View available NPM scripts in the [Available Scripts](#available-scripts) section for more information.

## Available Scripts

### `npm start`

Run the KMZ express server for production mode.

### `npm run dev`

Run the KMZ express server in development load with live reload using nodemon.

### `npm run lint`

Check lint errors.

### `npm run lint:fix`

Fix lint errors.

@ciatph<br>
20230224
