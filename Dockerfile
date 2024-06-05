FROM node:lts as build
WORKDIR /app
COPY package.json .
RUN npm i
COPY . .
RUN npm run build