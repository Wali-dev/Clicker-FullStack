const express = require("express");
const router = express.Router();

const { userLogin } = require("../controllers/authController");


//Public Routes
router.get("/login", userLogin);
// router.post("/send-reset-password-email", UserController.resetEmailandPasswordEmail);
// router.post("/reset-password/:id/:token", UserController.userPasswordReset);



module.exports = router;