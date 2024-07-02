const express = require("express");
const { createlinkClick } = require("../controllers/clickController");

const router = express.Router();


router.post("/api/click", createlinkClick);



module.exports = router;