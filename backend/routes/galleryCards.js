const express = require("express");
const router = express.Router();
const Gallery = require("../models/GalleryCards");

// Add new gallery data
router.post("/add", async (req, res) => {
  try {
    const data = req.body.galleries; // expects array of gallery items
    const saved = await Gallery.insertMany(data);
    res.status(201).json({ message: "Gallery data added!", saved });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all galleries
router.get("/all", async (req, res) => {
  try {
    const galleries = await Gallery.find();
    res.status(200).json(galleries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
