// routes/videos.js
const express = require('express');
const router = express.Router();
const videosController = require('../controllers/videos');

// Video List Endpoint
router.get('/', videosController.getVideos);

// Video Detail Endpoint
router.get('/:id', videosController.getVideoById);

// Add other video-related routes here, such as adding comments, fetching products, etc.

module.exports = router;
