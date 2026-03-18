import { DOMHelpers } from "./Domhelpers.js"

export class ExpenseUI{
    constructor(userServices, expenseServices){
        this.userServices = userServices
        this.expenseServices = expenseServices
    }

    initializeElement(){
        this.element ={
            addUserForm : DOMHelpers.getElementById("addUserForm"),
            userinput: DOMHelpers.getElementById("userinput")
        }
    }

    bindEvent(){
        this.element.addUserForm.addEventListener("submit", (e) =>{
            this.handleAddUser(e);

        })
    }

    handleAddUser(e){
        e.preventDefault()

        try{
            // user name provided
            const name = this.element.userinput.ariaValueMax.trim()
            if(!name){
                throw new Error("user name is mandatory")
            }
           const user = this.userService.addUser(name)

        //    reset the form
        this.element.addUserForm.reset()

        console.log(`user ${user.name} added`)
        } catch(error){
         console.error("Error adding User", error)   
        }
    }
}