const db = require("../models");

//const User = db.user;
const Expense = db.expense;


const getExpensesForCurrentUser = async (req, res) => {

  const userId = req.headers.userid;
  let expenses;

  try {

    expenses = await Expense.findAll({where:{userId: userId}, order: [['createdAt', 'DESC']]});
    
    console.log('EXPENSES', expenses);

    if (expenses || expenses == null) 
      return res.status(200).json(expenses);

    return res.status(404).json({ message: 'expenses not found'});

  } catch (error) {
    return res.status(401).json({ message: "Unable to find expenses", error });
  }
};


const getExpensesByUserId = async (req, res) => {

  const userId = req.params.userid;
  let expenses;

  try {

    expenses = await Expense.findAll({where:{userId: userId}, order: [['createdAt', 'DESC']]});
    
    console.log('EXPENSES', expenses);

    if (expenses || expenses == null) 
      return res.status(200).json(expenses);

    return res.status(404).json({ message: 'expenses not found'});

  } catch (error) {
    return res.status(401).json({ message: "Unable to find expenses", error });
  }
};


const getLastExpensesForCurrentUser = async (req, res) => {

  const userId = req.params.userid;
  let expenses;

  try {

    // WE HAVE TO GET FOR LAS 3 MONTHS HERE
    expenses = await Expense.findAll({where:{userId: userId}, order: [['createdAt', 'DESC']]});
    
    console.log('EXPENSES', expenses);

    if (expenses || expenses == null) 
      return res.status(200).json(expenses);

    return res.status(404).json({ message: 'expenses not found'});

  } catch (error) {
    return res.status(401).json({ message: "Unable to find expenses", error });
  }
};



const createExpense = async (req, res) => {

  const label = req.body.label;
  const amount = req.body.amount;
  const dateOperation = req.body.dateOperation;
  const mode = req.body.mode;

  const userId = req.body.userId;

  try {

    const result = await db.sequelize.transaction(async (t) => {
      const newExpense = await Expense.create({
        label,
        amount,
        dateOperation,
        mode,
        userId,
      }, { transaction: t });

      return { newExpense };
    });

    //console.log(result);

    return res.status(201).json({ message: "New Expense registered successfully", newExpense: result.newExpense });
  } catch (error) {
    return res.status(500).json({ message: "Failed to create Expense", error });
  }
};



module.exports = {
  getExpensesForCurrentUser,
  getExpensesByUserId,
  getLastExpensesForCurrentUser,
  createExpense,
};
