const express = require("express");
const router = express.Router();

const { getAllUser, createUser, updateEmailPassword, updateUser, getOneUser } = require("../controllers/userControllers");
const checkUserAuth = require('../middleware/authMiddleware');


router.post("/register", createUser);
router.patch("/update", updateUser);
router.get("/all", getAllUser);
router.get("/", getOneUser);

router.patch("/register", updateEmailPassword);

//Route level middleware
router.use('/loggeduser', checkUserAuth);



module.exports = router;