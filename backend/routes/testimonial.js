const express = require("express");
const router = express.Router();
const Testimonial = require("../models/Testimonial");

// Add new quote
router.post("/add", async (req, res) => {
  try {
    const newTestimonial = new Testimonial(req.body);
    await newTestimonial.save();
    res.status(201).json({ message: "Testimonial added successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all quotes
router.get("/all", async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.status(200).json(testimonials);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
