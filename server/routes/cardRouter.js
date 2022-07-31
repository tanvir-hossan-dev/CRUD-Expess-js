const router = require("express").Router();
const cardController = require("../controllers/cardController");

router.patch("/:id", cardController.cardPatch);

router.delete("/:id", cardController.cardDelete);

router.get("/", cardController.cardGets);

router.post("/", cardController.cardPost);

module.exports = router;
