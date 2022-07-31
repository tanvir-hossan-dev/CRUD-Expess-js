const router = require("express").Router();
const cardController = require("../controllers/cardController");

router.patch("/:id");

router.delete("/:id");

router.get("/", cardController.cardGets);

router.post("/", cardController.cardPost);

module.exports = router;
