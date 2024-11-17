const express = require('express');
const router = express.Router();

// Sample route
router.get('/hello', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

// Additional routes can be added here
router.get('/about', (req, res) => {
  res.json({ message: 'This is a mini project!' });
});

module.exports = router;
