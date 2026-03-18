import{User} from "../models/user.js"

export class UserService {
    constructor(){
        this.users = new Map()


    }
    addUser(name){
        if(!name){
            throw new Error("user name is required")
        }
        let trimmedName = name.trim();
        if(this.users.has(trimmedName)){
            throw new Error ("user already exists")}
        const user = new User(trimmedName)
        this.users.set(trimmedName, user)
        return user 
    }

    getuser(name){
        return this.users.get(name)
    }

    getAllUsers(){
       return Array.from(this.users.values())
    }

    getuserNames(){
        return Array.from(this.users.keys())
    }

    hasUser(name){
        return this.users.has(name)
    }

    getUserCount(){
      
     return this.users.size()
    }

    deleteAUser(user){
        this.user.delete(user)
    }

    clear(){
        this.users.clear()
    }
}