const express = require("express");
const router = express.Router();

const { getAllUser, createUser, updateEmailPassword, updateUser } = require("../controllers/userControllers");



router.post("/register", createUser);
router.patch("/update", updateUser);
router.get("/", getAllUser);

router.patch("/register", updateEmailPassword);



module.exports = router;