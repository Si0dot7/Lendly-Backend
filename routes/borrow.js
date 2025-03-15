const express = require("express");
const {auth} = require('../middleware/auth')
const {filter,create,list} = require('../controller/borrow')

const router = express.Router();

router.get("/borrow/filter", auth, filter);
router.get("/borrow/list", auth, list);

router.post("/borrow", auth, create);

module.exports = router
