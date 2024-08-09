const express = require("express");
const router = express.Router();

const { userLogin, changePassword, resetEmailandPasswordEmail, userPasswordReset } = require("../controllers/authController");
const checkUserAuth = require("../middleware/auth.Middleware");
// const { checkUserAuth } = require('../middleware/authMiddleware');
// const { checkUserAuthfn } = require('../middleware/loginAuthMiddleware');

//Public Routes
router.post("/login", userLogin);
router.post("/send-reset-password-email", resetEmailandPasswordEmail);
router.post("/reset-password/:userName/:token", userPasswordReset);

//Route level middleware
// router.use('/changepassword', checkUserAuth);
router.get('/loggeduser', checkUserAuth);

//Private Routes
// router.post("/changepassword", checkUserAuthfn, changePassword);

module.exports = router;