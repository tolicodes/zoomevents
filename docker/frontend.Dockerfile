FROM node:latest

WORKDIR /app
COPY ./frontend/package.json .
COPY ./frontend/yarn.lock .
RUN yarn

COPY ./frontend .

CMD yarn start