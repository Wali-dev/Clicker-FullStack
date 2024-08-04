const express = require("express");
const router = express.Router();

const { getAllUser, createUser, updateEmailPassword, updateUser, getOneUser } = require("../controllers/userControllers");



router.post("/register", createUser);
router.patch("/update", updateUser);
router.get("/all", getAllUser);
router.get("/", getOneUser);

router.patch("/register", updateEmailPassword);



module.exports = router;