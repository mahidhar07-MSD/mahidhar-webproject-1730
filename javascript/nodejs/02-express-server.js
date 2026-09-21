const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the Express server');
});

app.get('/students', (req, res) => {
  res.json([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ]);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Express app listening on http://localhost:${PORT}`);
});
