const path = require("path");

const express = require("express");

const gymkhanaController = require("../controller/gymkhana");

const router = express.Router();

router.get('/', gymkhanaController.gymkhanaController)

module.exports = router;