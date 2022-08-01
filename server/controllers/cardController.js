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
    res.status(201).json(cards);
  } catch (err) {
    console.log(err);
  }
};

const cardPatch = async (req, res) => {
  const { title, name, learn } = req.body;
  try {
    const { id: _id } = req.params;
    const user = await Card.findById(_id);
    user.title = title ?? user.title;
    user.name = name ?? user.name;
    user.learn = learn ?? user.learn;

    await user.save();
    res.status(201).json({ message: "update successful", user });
  } catch (err) {
    console.log(err);
  }
};

const cardDelete = async (req, res) => {
  try {
    const { id: _id } = req.params;
    await Card.findByIdAndDelete(_id);
    res.status(203).json();
  } catch (err) {
    console.log(err);
  }
};

module.exports = { cardPost, cardGets, cardPatch, cardDelete };
