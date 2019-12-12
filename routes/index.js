const express = require('express');
const posts = require('./posts');
const comments = require('./comments');

const router = express.Router();

router.use('/posts', posts);
router.use('/comments', comments);

module.exports = router;
