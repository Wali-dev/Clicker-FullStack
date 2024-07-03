const express = require("express");
const router = express.Router();

const { getUserAllProfileClicks, createProfileVisitClick } = require("../controllers/profileVisitController");


router.get("/", getUserAllProfileClicks);
router.post("/", createProfileVisitClick);


module.exports = router;