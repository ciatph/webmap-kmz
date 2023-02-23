## webserver

Express web server for hosting the webpack-built website from the **/client** directory.

Local URL: http://localhost:3001

### Dependencies

The following dependecies are used for this project. Feel free to experiment using other dependencies and versions.

1. Windows 64-bit OS
2. nvm version 1.1.9 (for Windows)
3. NodeJS 16.14.2 installed using nvm
   - node v16.14.2
   - npm v8.5.0
4. NodeJS modules (installed via npm)
   - express 4.18.2
   - cors 2.8.5
   - cookie-parser 1.4.6

## Installation and Usage

1. Install dependencies.<br>
`npm install`

2. Run the localhost express web server for development:<br>
`npm run dev`

3. Load the localhost development website on:<br>
`http://localhost:3002`

4. View available NPM scripts in the [Available Scripts](#available-scripts) section for more information.

## Available Scripts

### `npm start`

Run the express server for production mode.

### `npm run lint`

Check lint errors.

### `npm run lint:fix`

Fix lint errors.

@ciatph<br>
20230224
