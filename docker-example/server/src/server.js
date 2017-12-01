const express = require('express');
const PORT = 8080;
const app = express();

app.get('/', (req, res) => {
  res.sendFile('index.html', {root: __dirname });
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);