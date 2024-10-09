// app.js
const express = require('express');
const app = express();
const port = 3000;

// Define a single API endpoint that always returns an HTTP 500 error
app.get('/', (req, res) => {
  res.status(500).json({
    message: 'Internal Server Error',
    error: 'Something went wrong on the server'
  });
});

// Start the Express server
app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});