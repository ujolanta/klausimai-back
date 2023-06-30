const express = require("express");
const router = express.Router();
const { INSERT_ANWER, GET_ANWERS } = require("../controllers/anwers");

router.post("/anwer", INSERT_ANWER);
router.get("/anwers", GET_ANWERS);

module.exports = router;