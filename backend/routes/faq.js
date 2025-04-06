const express = require("express");
const router = express.Router();
const Qna = require("../models/Faq");

// Add QnAs
router.post("/add", async (req, res) => {
  try {
    const data = req.body.qnas; // array of qna
    const saved = await Qna.insertMany(data);
    res.status(201).json({ message: "Faq added successfully!", saved });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all QnAs
router.get("/all", async (req, res) => {
  try {
    const qnas = await Qna.find();
    res.status(200).json(qnas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
