FROM node:14.17-alpine
WORKDIR /home/node/app
COPY package.json ./
COPY yarn.lock ./
RUN yarn
COPY . .
RUN yarn build
EXPOSE 8080