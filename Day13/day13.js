"use strict";

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

greetMe(tom);
tom.logMessage() 


console.log(this.name);

function outer(a){
    console.log("this is the outer fnction", this);

    return function inner(b){
        console.log("this is the inner ", this)
    }
}

const real = outer(5);
real(33);






