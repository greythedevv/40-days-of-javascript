import {user} from "./user.js"

export class admin extends user {
    constructor(name, email){
        super(name ,email)
        this.id = crypto.randomUUID();
    }

    getRole(){
        return "Admin"
    }
}