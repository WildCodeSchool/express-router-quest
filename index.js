const express = require('express');
const posts = require('./routes/posts');
const comments = require('./routes/comments');

const app = express();
const port = 8000;

app.use('/api/posts', posts);
app.use('/api/comments', comments);

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }
  console.log(`Server is listening on ${port}`);
});
