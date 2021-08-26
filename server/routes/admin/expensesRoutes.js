const express = require("express");
const router = express.Router();

const expenseController = require('../../controllers/expenseController');
const authAdminMiddleware = require('../../middlewares/authAdminMiddleware')

router.get('/user/:id', authAdminMiddleware, (req, res, next) => expenseController.getExpensesByUserId(req,res));

module.exports = router;