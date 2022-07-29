const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ name: "Tanvir  Hossan" });
});

app.listen(8000, () => {
  console.log("Post is listening");
});
