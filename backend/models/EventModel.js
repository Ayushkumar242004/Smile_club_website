const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  id: Number,
  title: String,
  images: [String],
  qna: [
    {
      question: String,
      answer: String
    }
  ],
  points: {
    title: String,
    points: [String]
  },
  tags: [String],
  date: String,
  time: String,
  place: String,
  organizer: String,
  phone: String,
  email: String
});

module.exports = mongoose.model("EventModel", eventSchema);
