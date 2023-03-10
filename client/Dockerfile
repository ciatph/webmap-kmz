FROM node:16.19.1-alpine as base
RUN mkdir -p /opt/client
WORKDIR /opt/client
RUN adduser -S client
RUN chown -R client /opt/client
COPY package*.json ./
ENV NPM_CONFIG_PREFIX=$HOME/.npm-global
ENV PATH=$PATH:$HOME/.npm-global/bin

# BUILD TARGET
FROM base as build
RUN npm install && npm cache clean --force
COPY . ./
RUN mkdir /opt/dist && chown -R client /opt/dist
RUN npm run build
USER client

# DEVELOPMENT CLIENT PROFILE
FROM base as development
ENV NODE_ENV=development
RUN npm install && npm cache clean --force
COPY . ./
EXPOSE 3000
CMD ["npm", "run", "dev"]

# PRODUCTION CLIENT PROFILE
FROM nginx:1.22.0-alpine as production
COPY --from=build /opt/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
