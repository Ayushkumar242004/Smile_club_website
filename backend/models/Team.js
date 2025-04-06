const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  linkedin: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    default: "Alumni",
  },
  year: {
    type: Number,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Team", TeamSchema);
