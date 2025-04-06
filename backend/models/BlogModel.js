// backend/models/BlogModel.js
const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    id: Number,
    image: String,
    title: String,
    description: String,
    tags: [String],
});

module.exports = mongoose.model("SimpleBlog", blogSchema);
