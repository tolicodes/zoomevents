FROM node:latest

WORKDIR /app
COPY ./backend/package.json .
COPY ./backend/yarn.lock .
RUN yarn

COPY ./backend .

RUN yarn build

CMD yarn start