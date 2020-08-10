import "reflect-metadata";
import { createConnection } from "typeorm";
const bodyParser = require("body-parser");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const { makeExecutableSchema } = require("graphql-tools");
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";

import EventResolver from "./resolvers/Event";

import Event from "./entity/Event";

const {
  MYSQL_HOST,
  MYSQL_USERNAME,
  MYSQL_PASSWORD,
  MYSQL_DATABASE,
  PORT = 80,
} = process.env;

(async () => {
  const connection = await createConnection({
    type: "mysql",
    host: MYSQL_HOST,
    port: 3306,
    username: MYSQL_USERNAME,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
    synchronize: true,
    logging: true,
    entities: [__dirname + "/entity/**/*.js"],
    insecureAuth: true,
  });

  const express = require("express");
  const app = express();

  const schema = await buildSchema({
    resolvers: [EventResolver],
  });

  app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));
  app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

  // app.get("/events", async (req, res) => {
  //   const events = await connection.manager.find(Event);
  //   res.json(events);
  // });

  // app.post("/events", async (req, res) => {
  //   console.log(req.body);
  // });

  app.listen(PORT);
})();
