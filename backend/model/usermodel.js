const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  imgUrl: String
});

module.exports = mongoose.model("User", userSchema);