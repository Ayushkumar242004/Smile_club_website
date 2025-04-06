const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  image: String,
  title: String,
  date: String,
  link: String
});

module.exports = mongoose.model("Courses", courseSchema);
