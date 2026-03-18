import { DOMHelpers } from "./Domhelpers.js"
import { UserService } from "../services/userServices.js"

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
            expenseUserInput: DOMHelpers.getElementById("expenseUserInput")
        }
    }

    bindEvent(){
        this.element.addUserForm.addEventListener("submit", (e) =>{
            this.handleAddUser(e);

        })
    }

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

        //    reset the form
        this.element.addUserForm.reset()

        console.log(`User ${user.name} added`)
        console.log(`All user ${this.userServices.getUserCount()}`)
        } catch(error){
         console.error("Error adding User", error)   
        }
    }
}