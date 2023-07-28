// controllers/videos.js
const Video = require('../models/Video');

const getVideos = async (req, res) => {
  try {
    const videos = await Video.find({}, '_id title thumbnail_url');
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching videos' });
  }
};

const getVideoById = async (req, res) => {
  const videoId = req.params.id;
  try {
    const video = await Video.findById(videoId);
    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }
    res.json(video);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching video' });
  }
};

// Add other video-related controller functions here, such as adding comments, fetching products, etc.

module.exports = {
  getVideos,
  getVideoById,
  // Add other video-related controller functions here
};
