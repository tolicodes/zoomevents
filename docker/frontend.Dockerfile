FROM node:latest AS dev

WORKDIR /app
COPY ./frontend/package.json .
COPY ./frontend/yarn.lock .
RUN yarn

COPY ./frontend .

RUN yarn build

RUN ls

CMD yarn start

FROM nginx:1.17 AS prod
COPY --from=dev /app/build /usr/share/nginx/html
