require('dotenv').config();
const express = require('express');
const compression = require('compression');
const path = require('path');

const app = express();

app.use(compression());

app.use('/static', express.static('../build/static'));

app.get('/', (req, res) => {
  res.sendFile(path.join('../build/index.html'));
});

const PORT = 3002;

app.listen(PORT, '0.0.0.0', (err) => {
  if (err) { console.log(err); }
  console.info(`==> 🌎 app listening on http://localhost:${PORT}.`);
});