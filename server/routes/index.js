const router = require("express").Router();
const cardRouter = require("./cardRouter");

router.use("/api/v1/card", cardRouter);

module.exports = router;
