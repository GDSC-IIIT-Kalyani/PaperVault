const path = require("path");

const express = require("express");

const registerUserController = require("../controller/register-user");

const router = express.Router();

router.post('/', registerUserController.registerUser)

module.exports = router;