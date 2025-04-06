const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema({
  id: Number,
  event: String,
  images: [String],
});

module.exports = mongoose.model("GalleryCards", gallerySchema);
