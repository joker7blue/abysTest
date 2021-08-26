const express = require("express");
const router = express.Router();

const expenseController = require('../controllers/expenseController');
const authMiddleware = require('../middlewares/authMiddleware')

router.get('/', authMiddleware, (req, res, next) => expenseController.getExpensesForCurrentUser(req,res));

router.post('/store', authMiddleware, (req, res, next) => expenseController.createExpense(req,res));

module.exports = router;