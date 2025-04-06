const express = require("express");
const router = express.Router();
const Quote = require("../models/Quote");

// Add a new quote
router.post("/add", async (req, res) => {
  try {
    const newQuote = new Quote(req.body);
    await newQuote.save();
    res.status(201).json({ message: "Quote added successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all quotes
router.get("/all", async (req, res) => {
  try {
    const quotes = await Quote.find();
    res.status(200).json(quotes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
