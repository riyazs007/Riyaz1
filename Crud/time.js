const express = require('express');
const app = express();
const port = 3000; // You can change the port number to your preference

// Define the GET /timeofday endpoint
app.get('/timeofday', (req, res) => {
  const currentTime = new Date().toLocaleTimeString();
  res.json({ time: currentTime });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
