### STAGE 1: Build ###
FROM node:14.15.4-alpine AS build
ARG BUILDER_ENV=production
WORKDIR /usr/src/app
ENV PATH=${PATH}:./node_modules/.bin

ENV NODE_PATH=/usr/src/app/node_modules
ADD package*.json ./
RUN npm ci
RUN ngcc
ADD . .
## This can be passed incase we are using different releases for prod or stage
RUN ng build --c=${BUILDER_ENV}
