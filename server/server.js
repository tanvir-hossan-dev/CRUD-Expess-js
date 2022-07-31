require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/index");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

const port = process.env.PORT || 8000;

mongoose
  .connect(process.env.DB)
  .then(() => {
    app.listen(port, () => {
      console.log(`${port} port is listening`);
    });
  })
  .catch((e) => {
    console.log(e);
  });
