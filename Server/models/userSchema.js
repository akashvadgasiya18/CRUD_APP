const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  pass: {
    type: String,
    require: true,
  },
  mno: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
});

const users = new mongoose.model("users", userSchema);
module.exports = users;
