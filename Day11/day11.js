function outer(){
    let x = 10;
    
    return function inner (){
        console.log(x)
    }
    
}
const ret = outer();
console.log(ret())



function outerCount(){
    let count = 0;

    return function innerCount(){
        count++
        console.log(count)
    }
}
let retVal = outerCount();
retVal();
retVal();


function createBankAccount(initialBalance){
    let balance = initialBalance;

  return {
    
    deposit : function deposit(amount){
        balance = balance + amount
        console.log(`deposited : ${amount} Balance is : ${balance}`)
        },

    withdraw : function withdraw(amount){
        if(amount > balance){
            console.warn("Insifficient Fund")
        } else { balance = balance - amount
        console.log(`amount : ${amount} current Balance is : ${balance}`)
        }},

    printBalance : function printBalance(){
        console.log(`${balance} is your current balance`)
    }, }}

let newAccount = createBankAccount(100);
console.log(newAccount.deposit(300))
console.log(newAccount.withdraw(50))
console.log(newAccount.withdraw(80))
console.log(newAccount.printBalance())


// you can keep the variabe private without exposing them
// you can stop variale pollution
// ou can creat function factory
// you can keep a variable alive between multiple calls 