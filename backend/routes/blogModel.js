// backend/routes/simpleBlogRoutes.js
const express = require("express");
const router = express.Router();
const SimpleBlog = require("../models/BlogModel");

router.post("/save-simple-blogs", async (req, res) => {
    try {
        const blogs = req.body.blogs;
        const savedBlogs = await SimpleBlog.insertMany(blogs);
        res.status(201).json({ message: "Simple blogs saved!", savedBlogs });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
