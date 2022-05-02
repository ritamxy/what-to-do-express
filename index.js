// Import packages
const express = require('express');
const morgan = require('morgan');
// App
const app = express();
// Morgan
app.use(morgan('tiny'));
// First route
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('./routes/index.routes'));

// Starting server
// Task: Refactor port number to be fetched from environment
app.listen('2022');
