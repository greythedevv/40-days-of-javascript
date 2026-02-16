// // | **Situation**                                            | **Value of `this`**                                                     |
// // | -------------------------------------------------------- | ----------------------------------------------------------------------- |
// // | **At the Global Scope**                                  | Refers to the global object (`window` in browsers, `global` in Node.js) |
// // | **Inside an Object Method**                              | Refers to the object that owns the method                               |
// // | **Inside a Standalone Non-Arrow Function**               | Refers to the global object (or `undefined` in strict mode)             |
// // | **Inside an Arrow Function (Standalone)**                | Inherits `this` from its surrounding (lexical) scope                    |
// // | **Inside an Arrow Function (as Object Method)**          | Does NOT refer to the object, inherits from outer scope                 |
// // | **Inside an Object Created with a Constructor Function** | Refers to the newly created object                                      |

// 1. At the Global Scope
// console.log(this);


// Browser Output: window
// Node.js Output: global

// 2. Inside an Object Method
// const user = {
//     name: "Tom",
//     greet() {
//         console.log(this.name);
//     }
// };

// user.greet();


// Output:

// Tom


// this refers to the user object.

// 3. Inside a Standalone Non-Arrow Function
// function show() {
//     console.log(this);
// }

// show();


// Non strict mode:

// window (browser)


// Strict mode:

// "use strict";
// function show() {
//     console.log(this);
// }
// show();

// undefined

// 4. Inside an Arrow Function (Standalone)
// const show = () => {
//     console.log(this);
// };

// show();


// Arrow functions DO NOT have their own this.
// They inherit this from where they were created (usually global here).

// 5. Inside an Arrow Function (as Object Method)
// const user = {
//     name: "Jerry",
//     greet: () => {
//         console.log(this.name);
//     }
// };

// user.greet();


// Output:

// undefined


// Because arrow functions inherit this from the outer scope instead of the object.

// 6. Inside an Object Created with Constructor Function
// function Person(name) {
//     this.name = name;
// }

// const p1 = new Person("Alex");

// console.log(p1.name);


//Output:

// Alex

// 2. What is the problem here? Fix it to log the correct name and explain the fix
const user = {
  name: "tapaScript",
  
  greet: function(){
    console.log(`Hello, ${this.name}!`);
  },
  
};


user.greet();

// in an arrow function, the "this" keword refer to the global object so it prints out "hello, undefined!"
//  to fix this we can either change the arrow function to a regular function or we can add a new function 
// that returns the name and call it inside the arrow function.

// 3. Can you explain what is the problem here and fix the issue to log the correct name?

const obj = {
  name: "Tom",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

const greetFn = obj.greet;
greetFn();

greetFn.call(obj);


// output: hellow, undefined! 
//the problem is that when we assign obj.greet to greetFn, we lose the context of "this" which refers to 
//obj.
//to fix this we can use the call method to explicitly set the value of "this" to obj when calling 
//greetFn.

// 4. What is the problem with the following code? Why isn't it logging the name correctly?
const user1 = {
  name: "Alex",
  greet: function () {
    const inner = () =>{
      console.log(`Hello, ${this.name}!`);
    }
    inner();
  }
};

user1.greet();


// Create a Sports constructor function that takes name and number of players as arguments and assigns them
//  using this keyword. Then, create two sports instances and log their details


function Sports(name, numPlayers){
    this.name = name;
    this.numPlayers = numPlayers;
}

let football = new Sports("pele", "11");
let volleyball = new Sports("karch", "6");

console.log (football)
console.log(volleyball)


// 6. Can you attach the car1's describe() method to car2 object? Give all possible solutions that you can 
// think of

const car1 = {
  brand: "Audi",
  model: "A8",
  describe: function () {
    console.log(`This car is a ${this.brand} ${this.model}.`);
  },
};

const car2 = {
  brand: "BMW",
  model: "X1",
};

let describeCar = car1.describe;
describeCar();


describeCar.call(car2);
describeCar.apply(car2);
const b3 = describeCar.bind(car2);
b3()



// 7. What will be the output of the following code and why?


const person = {
  name: "Charlie",
  sayHello: function () {
    console.log(this.name);
  },
  sayHelloArrow: () => {
    console.log(this.name);
  },
};

person.sayHello();
person.sayHelloArrow();

// Options are:

// A: "Charlie" and "Charlie"
// B: "Charlie" and undefined
// C: "Charlie" and "" (empty string)
// D: undefined and "Charlie"

// the answer is B because the arrrow function lexical environment is the global scope and in the 
// global scope there is no name property so it returns undefined. while the regular function has its
// own this which refers to the person object and it returns "Charlie".



