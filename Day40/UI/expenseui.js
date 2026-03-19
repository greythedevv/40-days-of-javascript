import { DOMHelpers } from "./Domhelpers.js"
import { UserService } from "../services/userServices.js"
import { showSuccessToast } from "../utils/tostutil.js"
import { showErrorToast } from "../utils/tostutil.js"

export class ExpenseUI{
    constructor(userServices, expenseServices){
        this.userServices = userServices
        this.expenseServices = expenseServices


        this.initializeElement();
        this.bindEvent();
        this.initializeSelectBox()
        
        
    }

    initializeElement(){
        this.element ={
            addUserForm : DOMHelpers.getElementById("addUserForm"),
            userinput: DOMHelpers.getElementById("userinput"),
            expenseUserInput: DOMHelpers.getElementById("expenseUserInput"),
            amountInput: DOMHelpers.getElementById("amountInput"),
            expenseReasonInput: DOMHelpers.getElementById("expenseReasonInput"),
            addExpenseForm: DOMHelpers.getElementById("addExpenseForm"),
            paymentList: DOMHelpers.getElementById("payment-list")

        }
    }
    // Bind Events
    bindEvent(){
         if (!this.element.addUserForm || !this.element.addExpenseForm) {
        console.error("Forms not found in DOM", this.element);
        return;
    }


        this.element.addUserForm.addEventListener("submit", (e) =>{
            this.handleAddUser(e);

        })

        this.element.addExpenseForm.addEventListener("submit", (e)=>{
            this.handleAddExpense(e)
        })
    }

    // Initialize the select box
    initializeSelectBox(){
        const defaultOption = DOMHelpers.createOption("select User", "") 
        this.element.expenseUserInput.add(defaultOption)
    }

    handleAddUser(e){
        e.preventDefault()

        try{
            // user name provided
            const name = this.element.userinput.value.trim()
            if(!name){
                throw new Error("user name is mandatory")
            }
           const user = this.userServices.addUser(name)
        //    add the user to the expense box
        this.addUserToSelect(user.name)

        //    reset the form
        this.element.addUserForm.reset()

        showSuccessToast(`User ${user.name} added`)
        console.log(`All user ${this.userServices.getUserCount()}`)
        } catch(error){
         console.error("Error adding User", error)   
         showErrorToast(error.message)
        }
    }

    //  add user to selct 

    addUserToSelect(userName){
        const option = DOMHelpers.createOption(userName, userName)
        this.element.expenseUserInput.add(option)
    }

    //  handle add expense

    handleAddExpense(e){
        e.preventDefault()

        try{
            const paidBy = this.element.expenseUserInput.value.trim()
            const amount = this.element.amountInput.valueAsNumber
            const description = this.element.expenseReasonInput.value.trim()
            if(!paidBy){throw new Error("please select a user")}

        if(!amount || amount <= 0){throw new Error ("please enter an amount greater than zero")}

        const expense = this.expenseServices.addExpense(paidBy, amount, description)

        // render the expense
        this.renderExpense(expense)

        // reset the form
            this.element.amountInput.value = ""
            this.element.expenseReasonInput.value =""
        // show toast 
            showSuccessToast(`Expense ${amount} added by ${paidBy}`)
         }catch(error){
            console.error("Error adding Expense", error)   
            showErrorToast(error.message)
        }
    }

    renderExpense(expense){

        const text = expense.description !== "No description"? 

       ` ${expense.paidBy} paid $${expense.amount} for ${expense.description}`
        :`${expense.paidBy} paid $${expense.amount}`

        const listItem = DOMHelpers.createListItem(text, "expense-item")
        this.element.paymentList.appendChild(listItem)
    }
}