FROM node:latest

WORKDIR /app
COPY ./package.json .

RUN yarn

RUN cat node_modules

COPY . .

RUN yarn build

CMD yarn start