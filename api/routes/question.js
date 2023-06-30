const express = require("express");
const router = express.Router();
const { INSERT_QUESTION } = required("../controllers.questions");

router.post("/question", INSERT_QUESTION);
router.get("/questions", GET_QUESTIONS);

module.exports = router;