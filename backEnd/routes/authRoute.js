const express = require("express");
const router = express.Router();

const { userLogin } = require("../controllers/authController");
const checkUserAuth = require('../middleware/authMiddleware');

//Public Routes
router.get("/login", userLogin);
// router.post("/send-reset-password-email", UserController.resetEmailandPasswordEmail);
// router.post("/reset-password/:id/:token", UserController.userPasswordReset);

//Route level middleware
// router.use('/changepassword', checkUserAuth);
router.use('/loggeduser', checkUserAuth);

module.exports = router;