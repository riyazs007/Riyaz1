const express = require('express');
const app = express();
const port = 3000;

// Define a middleware to check for the "Authorization" header
app.use((req, res, next) => {
  const authorizationHeader = req.header('Authorization');
  if (!authorizationHeader) {
    return res.status(403).json({ message: 'Forbidden: Authorization header is missing' });
  }
  // You can implement your authentication logic here if needed.
  // For simplicity, we're only checking for the presence of the header.
  next();
});

// Define the GET /timeofday endpoint
app.get('/timeofday', (req, res) => {
  const currentTime = new Date().toLocaleTimeString();
  res.json({ time: currentTime });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
