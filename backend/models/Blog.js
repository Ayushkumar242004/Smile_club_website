// models/Blog.js
const mongoose = require('mongoose');

const qnaSchema = new mongoose.Schema({
  question: String,
  answer: String,
});

const blogSchema = new mongoose.Schema({
  id: Number,
  title: String,
  author: String,
  images: [String],
  qna: [qnaSchema],
  tags: [String],
  date: String,
  time: String,
  category: String,
  organizer: String,
  phone: String,
  email: String,
});

module.exports = mongoose.model('Blog', blogSchema);
