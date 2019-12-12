const express = require('express');
const fakeComments = require('../data/comments');

const router = express.Router();

// Get a list of comments
router.get('/', (req, res) => {
  res.json(fakeComments);
});

module.exports = router;
