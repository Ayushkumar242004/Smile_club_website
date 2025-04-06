const express = require("express");
const router = express.Router();
const Course = require("../models/Courses");

// Add courses to DB
router.post("/save-courses", async (req, res) => {
  try {
    const courses = req.body.courses;
    const savedCourses = await Course.insertMany(courses);
    res.status(201).json({ message: "Courses saved!", savedCourses });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Optional: Get all courses
router.get("/all", async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
