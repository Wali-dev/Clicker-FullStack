const express = require("express");
const router = express.Router();

const { getUserlinks, createLink, updateLink } = require("../controllers/linkController");


router.get("/", getUserlinks);
router.post("/", createLink);
router.patch("/", updateLink);






module.exports = router;