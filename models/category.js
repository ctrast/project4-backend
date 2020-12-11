const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  phrases: [{ type: Array, required: true }],
});

module.exports = mongoose.model("Category", categorySchema);
