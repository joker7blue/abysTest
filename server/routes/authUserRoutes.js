const express = require("express");
const router = express.Router();

const authController = require('../controllers/authController');

router.post('/login', (req, res, next) => authController.login(req,res));

router.post('/register', (req, res, next) => authController.register(req,res));

module.exports = router;