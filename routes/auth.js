const express = require("express");
const router = express.Router();
const { register, login, currentUser } = require("../controller/auth");
const { auth } = require("../middleware/auth");

router.post("/register", register);
router.post("/login", login);
router.post("/currentUser", currentUser);

module.exports = router;
