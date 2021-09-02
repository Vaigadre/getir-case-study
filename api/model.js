const mongoose = require("mongoose");
const { Schema } = mongoose;

const recordSchema = new Schema({
  key: String,
  value: String,
  counts: [Number],
  createdAt: { type: Date }
});

module.exports = mongoose.model("records", recordSchema);
