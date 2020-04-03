import "reflect-metadata";
import { createConnection } from "typeorm";

import Event from "./entity/Event";

const {
  MYSQL_HOST,
  MYSQL_USERNAME,
  MYSQL_PASSWORD,
  MYSQL_DATABASE,
  PORT = 80
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
    insecureAuth: true
  });

  const express = require("express");
  const app = express();

  app.get("/", async (req, res) => {
    const events = await connection.manager.find(Event);
    res.json(events);
  });

  app.listen(PORT);
})();
