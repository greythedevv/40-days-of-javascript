import { ExpenseUI } from "./UI/expenseui.js";
import { ExpenseService } from "./services/expenseService.js";
import { UserService } from "./services/userServices.js";


class ExpenseApp{
    constructor(){
        this.ui = null
        this.UserService = new UserService();
        this.ExpenseService = new ExpenseService(this.UserService)
    }
}

init() 
   { try{
        this.ui =new ExpenseUI(this.UserService, this.ExpenseService)
        console.log("splitter App initialized sucessfully")
    } catch(error){
        console.log("failed to initialize app", error)
    }}

    