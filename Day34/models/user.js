export class user{
    constructor(name, email){
        this.name = name
        this.email = email
    }

    getRole(){
        return "user"
    }
}