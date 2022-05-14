// Import packages
const express = require("express");
const morgan = require("morgan");
// App
const app = express();
// Morgan
app.use(morgan("tiny"));
// First route
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cors = (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  next();
};

app.use(cors);

app.use(require("./routes/index.routes"));

// Starting server
// Task: Refactor port number to be fetched from environment
app.listen("2022");
