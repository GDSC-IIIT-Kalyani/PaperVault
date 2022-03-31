const path = require("path");

const express = require("express");

const loginUserController = require("../controller/login-user");

const router = express.Router();

router.post('/', loginUserController.LoginUser)

module.exports = router;