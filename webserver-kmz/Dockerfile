# BASE PROFILE
FROM node:16.19.1-alpine AS base
RUN mkdir -p /opt/webserver-kmz
WORKDIR /opt/webserver-kmz
RUN adduser -S server
RUN chown -R server /opt/webserver-kmz
COPY package*.json ./

# PRODUCTION PROFILE TARGET
FROM base as production
ENV NODE_ENV production
RUN npm ci --only=production && npm cache clean --force
COPY . .
USER server
EXPOSE 3002
CMD ["node", "src/index.js"]

# DEVELOPMENT PROFILE TARGET
FROM base as development
ENV NODE_ENV development
RUN npm install && npm cache clean --force
COPY . .
USER server
EXPOSE 3002
CMD ["npm", "run", "dev"]
