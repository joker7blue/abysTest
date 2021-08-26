import { combineReducers } from "redux";
import expensesReducer from "./expenses/expenses.reducer";
import userReducer from "./user/user.reducer";

export default combineReducers({

    user: userReducer,
    expenses: expensesReducer
})