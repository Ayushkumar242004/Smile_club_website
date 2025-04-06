const mongoose = require("mongoose");

const qnaSchema = new mongoose.Schema({
  id: Number,
  question: String,
  answer: String
});

module.exports = mongoose.model("Faq", qnaSchema);
