const express = require("express");
const { getUserlinks, createLink, updateLink } = require("../controllers/linkController");



const router = express.Router();

router.get("/api/links/", getUserlinks)
router.post("/api/links/", createLink )
router.patch("/api/links/", updateLink )






module.exports = router;