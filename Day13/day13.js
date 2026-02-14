console.log("Day 13 JS file is loaded"); 


let tom = {
    name: "tom",
    age: 17
}

let jerry = {
    name: "jerry",
    age: 18
}

function greetMe(obj){
    obj.logMessage = function (){
        console.log(`${this.name} is ${this.age} years old!`)
    }
    console.log(obj)
}
uh
greetMe(tom);
tom.logMessage()
console.log(this.name);




