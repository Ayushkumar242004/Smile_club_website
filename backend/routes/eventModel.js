const express = require("express");
const router = express.Router();
const Event = require("../models/EventModel");

// Add one or more events
router.post("/add", async (req, res) => {
  try {
    const data = req.body.events; // expecting array
    const saved = await Event.insertMany(data);
    res.status(201).json({ message: "Events added successfully!", saved });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all events
router.get("/all", async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
