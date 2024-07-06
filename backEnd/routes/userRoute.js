const express = require("express");
const router = express.Router();

const { getAllUser, createUser, updateUser } = require("../controllers/userControllers");




router.get("/", getAllUser);
router.post("/", createUser);
router.patch("/", updateUser);



module.exports = router;