// src/app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware, routes, etc.
app.get('/', (req, res) => {
  res.send('Welcome to the server!');
});

module.exports = app; // Export the app without starting the server
