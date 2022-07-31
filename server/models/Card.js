const mongoose = require("mongoose");

const cardSchema = mongoose.Schema({
  title: { type: String, required: true },
  name: { type: String, required: true },
  learn: { type: String, required: true },
  createdAt: { type: Date, default: new Date() },
});

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
