const express = require('express');
const app = express();
const PORT = 4000;

app.get('/random', (req, res) => {
  const randomValue = Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
  res.json({ random: randomValue });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
