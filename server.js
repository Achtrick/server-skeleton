const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();
const mongoose = require("./db/mongoose");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: ["http://localhost:3000/"] }));

app.listen(process.env.PORT, () => {
  console.log(`Running server on port: ${process.env.PORT}`);
});

app.get("/", (req, res) => {
  res.status(200).send(`Running server on port: ${process.env.PORT}`);
});
