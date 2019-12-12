const express = require('express');
const api = require('./routes');

const app = express();
const port = 8000;

app.use('/api', api);

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }
  console.log(`Server is listening on ${port}`);
});
