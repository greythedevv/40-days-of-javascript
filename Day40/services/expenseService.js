import { Expense } from "../models/expense.js";
import { UserService } from "./userServices.js";

export class ExpenseService {
    constructor(userService) {
        this.expenses = [];
        this.userService = userService;
    }

    addExpense(paidBy, amount, description) {
        if (!this.userService.hasUser(paidBy)) {
            throw new Error("User doesn't exist");
        }

        const newExpense = new Expense(paidBy, amount, description);
        this.expenses.push(newExpense);
        return newExpense;
    }

    getAllExpenses() {
        return [...this.expenses];
    }

    getExpenses(userName) {
        return this.expenses.filter(exp => exp.paidBy === userName);
    }

    clearExpense() {
        this.expenses = [];
    }

    simplifyExpenses() {
        // logic will go here
    }
}

