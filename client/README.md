## client

Source files for the client web app.

### Dependencies

The following dependecies are used for this project. Feel free to experiment using other dependencies and versions.

1. Windows 64-bit OS
2. nvm version 1.1.9 (for Windows)
3. NodeJS 16.19.1 installed using nvm
   - node v16.19.1
   - npm v8.19.3
4. NodeJS modules (installed via npm)
   - webpack 5.75.0
   - webpack-dev-server 4.11.1
   - webpack-cli 5.0.1
   - css-loader 6.7.3
   - style-loader 3.3.1
   - html-webpack-plugin 5.5.0

## Installation and Usage

1. Install dependencies.<br>
`npm install`

2. Run the localhost static website:<br>
`npm run dev`

3. View available NPM scripts in the [Available Scripts](#available-scripts) section for more information.

## Available Scripts

### `npm run dev`

Run the simple localhost static website development environment with live reload using webpack.

### `npm run build`

Build the simple localhost static website for production mode using webpack.<br>
Built files are placed in the `/dist` directory.

### `npm run lint`

Check lint errors.

### `npm run lint:fix`

Fix lint errors.

@ciatph<br>
20230224
