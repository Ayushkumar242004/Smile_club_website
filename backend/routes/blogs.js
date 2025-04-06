// routes/blogRoutes.js
const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

router.post('/save-blogs', async (req, res) => {
  try {
    await Blog.insertMany(req.body);
    res.status(200).json({ message: 'Blogs saved successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
