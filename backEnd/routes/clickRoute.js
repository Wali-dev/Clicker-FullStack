const express = require("express");
const router = express.Router();

const { createlinkClick, getsingleLinkClick, getUserAllLinkClicks } = require("../controllers/clickController");



router.post("/", createlinkClick);
router.get("/", getsingleLinkClick);
router.get("/all", getUserAllLinkClicks);



module.exports = router;