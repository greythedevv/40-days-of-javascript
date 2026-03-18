export class User {
    constructor(name){
        if(!name || typeof name !== "string"){
            throw new Error("user name must be a non-empty string")
        }
        this.name = name.trim();
        this.id = this.generateid();
    }

    generateid(){
        return crypto.randomUUID();
    }
}