const express = require("express");
const router = express.Router();
const EventHighlight = require("../models/Timeline");

// POST - Add a new event highlight
router.post("/add", async (req, res) => {
  try {
    const newEvent = new EventHighlight(req.body);
    await newEvent.save();
    res.status(201).json({ message: "Timeline added successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET - Fetch all event highlights
router.get("/all", async (req, res) => {
  try {
    const events = await EventHighlight.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
