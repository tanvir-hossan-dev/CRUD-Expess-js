const Card = require("../models/Card");

const cardPost = async (req, res) => {
  try {
    const { title, name, learn } = req.body;
    const newCard = new Card({ title, name, learn });
    await newCard.save();
    res.status(200).json({ message: "Card created successful", newCard });
  } catch (err) {
    console.log(err);
  }
};

const cardGets = async (req, res) => {
  try {
    const cards = await Card.find({});
    res.status(201).json({ message: "get cards successful", cards });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { cardPost, cardGets };
