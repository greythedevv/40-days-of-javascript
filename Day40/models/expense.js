export class Expense {
    constructor(paidBy, amount, description ="No description"){
        if(!paidBy || typeof paidBy !== "string"){
            throw new Error("PaidBy name must be a non-empty string")
        }
        if(!amount || typeof amount !== "number" || amount <=0){
            throw new Error("Amount must be a positive integer")
        }
        this.paidBy = paidBy.trim()
        this.amount = parseFloat(amount.toFixed(2))
        this.description = description
        this.id = this.generateid();
        this.timeStamp = new Date().toISOString();
    }

    generateid(){
        return crypto.randomUUID();
    }
}