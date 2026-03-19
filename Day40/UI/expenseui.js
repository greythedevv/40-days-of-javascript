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
            expenseReasonInput: DOMHelpers.getElementById("expenseReasonInput")

        }
    }
    // Bind Events
    bindEvent(){
        this.element.addUserForm.addEventListener("submit", (e) =>{
            this.handleAddUser(e);

        })

        this.element.addExpenseForm.addEventListener("submit", function(e){
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
         showSuccessToast(error.message)
        }
    }

    addUserToSelect(userName){
        const option = DOMHelpers.createOption(userName, userName)
        this.element.expenseUserInput.add(option)
    }

    handleAddExpense(e){
        e.preventDefault

        try{

        }catch(error){
            
        }
    }
}