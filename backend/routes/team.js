const express = require("express");
const router = express.Router();
const TeamSchema = require("../models/Team");

// Add new alumni
router.post("/add", async (req, res) => {
  try {
    const newTeamSchema = new TeamSchema(req.body);
    await newTeamSchema.save();
    res.status(201).json({ message: "Team added successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all alumni
router.get("/all", async (req, res) => {
  try {
    const TeamList = await TeamSchema.find();
    res.status(200).json(TeamList);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
