## test-kmz

Testing loading KMZ files on a LeafletJS web map.

KMZ file source: [[link]](https://www.datapages.com/gis-map-publishing-program/gis-open-files/global-framework/global-heat-flow-database/kmz-files-list)

Preview: https://ciatph.github.io/webmap-kmz

### Dependencies

The following dependecies are used for this project. Feel free to experiment using other dependencies and versions.

1. Windows 64-bit OS
2. nvm version 1.1.9 (for Windows)
3. NodeJS 16.19.1 installed using nvm
   - node v16.19.1
   - npm v8.19.3
4. NodeJS modules (installed via npm) are available for each app directory.<br>
   - client, webserver and webserver-kmz

## Installation

1. Clone this repository.<br>
`git clone https://github.com/ciatph/webmap-kmz.git`

2. Install dependencies on all app directories.<br>
`npm install`

3. Run the localhost static website:<br>
`npm run client:dev`

4. Edit the contents of the localhost web map on<br>
`/client/app/main.js`

5. View available NPM scripts in the [Available Scripts](#available-scripts) section for more information.

## Installation - Docker

We can use Docker to run dockerized client and server apps for local development and production mode. The following methods require Docker and Docker compose correctly installed and set up on your development machine.

### Docker Dependencies

The following dependencies are used to build and run the image. Please feel feel free to use other OS and versions as needed.

1. Ubuntu 22.04.1
2. Docker version 23.0.1, build a5eeb1
3. Docker Compose v2.16.0

### Docker for Localhost Development

Edit any of the files under `/client/app` or `/webserver/src` after running step no. 2.

```
# 1. Build the client and webserver-kmz containers for localhost development.
docker compose -f docker-compose.dev.yml build

# 2. Create and start the development client and webserver-kmz containers
docker compose -f docker-compose.dev.yml up

# 3. Stop and remove the development containers, networks, images and volumes
docker compose -f docker-compose.dev.yml down
```


### Docker for Production Deployment

The following docker-compose commands build small `client` and `webserver-kmz` images targeted for creating optimized dockerized apps running on self-managed production servers. An **Nginx** service serves the frontend client on port 3000. The webserver-kmz, running on a separate Nodejs service, is also served by the client's Nginx service in a reverse proxy on port 3002. Hot reload is not available when editing source codes from `/client/src` or `/server/src`.

```
# 1. Build the client and webserver-kmz containers for production deployment.
docker compose -f docker-compose.prod.yml build

# 2. Create and start the production client and webserver-kmz containers.
docker compose -f docker-compose.prod.yml up

# 3. Stop and remove the production containers, networks, images and volumes
docker compose -f docker-compose.prod.yml down
```

## Available Scripts

### `npm install`

Installs nodejs dependencies on the **/client**, **/webserver** and **/webserver-kmz** directories.

### `npm start`

Builds the client app to the **/dist** directory and runs it on the production web server.<br>
This script automatically runs the `npm run client:build` script.

### `npm run client:dev`

Run the simple localhost static website on development mode with live reload using webpack.

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
