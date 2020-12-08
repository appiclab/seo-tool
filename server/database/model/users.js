const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
  shop_origin: {
    type: String,
    unique: true
  },
  access_token: String,
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Users", usersSchema);
