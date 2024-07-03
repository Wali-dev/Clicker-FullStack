const express = require("express");
const router = express.Router();

const { getAllUser, createUser, updateUser } = require("../controllers/userControllers");




router.get("/", getAllUser);
router.post("/", createUser);
router.patch("/:userName", updateUser);



module.exports = router;