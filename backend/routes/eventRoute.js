const express = require("express");
const router = express.Router();
const FestivalEvent = require("../models/EventModel");

// POST - Add a festival event
router.post("/add", async (req, res) => {
  try {
    const newEvent = new FestivalEvent(req.body);
    await newEvent.save();
    res.status(201).json({ message: "Event added successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET - Fetch all festival events
router.get("/all", async (req, res) => {
  try {
    const events = await FestivalEvent.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
