const express = require("express");
const { getOneUser, getAllUser, createUser, updateUser } = require("../controllers/userControllers");


const router = express.Router();



router.get("/api/user", getAllUser)

router.post("/api/user", createUser)
router.patch("/api/user/:userName", updateUser)



module.exports = router;