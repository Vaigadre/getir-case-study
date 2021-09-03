const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config({
  path: `.${process.env.NODE_ENV}.env`
});

const DB = require("./db");
const indexRouter = require("./api/route");
const { PORT } = require("./config");

// Run express app
const app = express();

// json body parser middleware
app.use(express.json());

// Health URL
app.get("/health", (req, res) => {
  res.send(`App is running on ${PORT}`);
});

// Index route
app.use("/api/v1", indexRouter);

// Connect to DB and then run server
DB.connectDb().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on PORT ", PORT);
  });
});

module.exports.app = app;
