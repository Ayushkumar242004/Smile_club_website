const express = require("express");
const router = express.Router();
const RecentPost = require("../models/SideComponent");

// Add new post
router.post("/add", async (req, res) => {
  try {
    const newPost = new RecentPost(req.body);
    await newPost.save();
    res.status(201).json({ message: "Recent post added successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all recent posts
router.get("/all", async (req, res) => {
  try {
    const posts = await RecentPost.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
