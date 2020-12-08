const mongoose = require("mongoose");

const tasksSchema = mongoose.Schema({
  shop_origin: String,
  type: String,
  created_at: {
    type: Date,
    default: Date.now
  },
  fulfilled: {
    type: Boolean,
    default: false
  },
  active: {
    type: Boolean,
    default: false
  },
  metafields: {
    title: String,
    description: String,
    alt: String,
  }
});

module.exports = mongoose.model("Tasks", tasksSchema);
