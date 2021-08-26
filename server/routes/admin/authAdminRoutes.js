const express = require("express");
const router = express.Router();

const authAdminController = require('../../controllers/authAdminController');

router.post('/login', (req, res, next) => authAdminController.login(req,res));

module.exports = router;