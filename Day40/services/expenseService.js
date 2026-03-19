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
        const userCount = this.userService.getUserCount();
        if (userCount === 0) {
            return [];
        }

        const net = {};
        const userNames = this.userService.getUserNames();

        // Initialize net balances
        userNames.forEach(name => {
            net[name] = 0;
        });

        // Calculate net balances
        this.expenses.forEach(expense => {
            const share = expense.amount / userCount;

            userNames.forEach(name => {
                if (name === expense.paidBy) {
                    net[name] += (expense.amount - share);
                } else {
                    net[name] -= share;
                }
            });
        });

        return this.calculateSettlements(net);
    }

   calculateSettlements(net) {
        const results = [];

        // filter ut balance people
        const names = Object.keys(net).filter(name => Math.abs(net[name]) > 0.01);
    // sort out balance
        names.sort((a, b) => net[a] - net[b]);
        // two pointer technique
        let i = 0;   //points to person who owes most money
        let j = names.length - 1; // pointsto person who is owed most money

        while (i < j) {
            const creditor = names[j];
            const debtor = names[i];
            const settlement = Math.min(-net[debtor], net[creditor]);

            if (settlement > 0.01) {
                net[debtor] += settlement; //reduce debtors debt
                net[creditor] -= settlement; // reduce creditor credit 
                results.push(`${debtor} owes ${creditor} $${settlement.toFixed(2)}`);
            }

            if (Math.abs(net[debtor]) < 0.01) i++;
            if (Math.abs(net[creditor]) < 0.01) j--;
        }

        return results;
    }
}

