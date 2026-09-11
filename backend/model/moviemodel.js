const mongoose = require("mongoose");
const movieSchema = mongoose.Schema({
  title: String,
  description: String,
  language: {
    type: String,
    enum: ["English", "Hindi"]
  }
});

module.exports = mongoose.model("Movie", movieSchema);