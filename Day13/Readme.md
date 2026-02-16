<h1 align="center">🚀 Day 13 of 40 Days of JavaScript</h1>
<h3 align="center">Understanding <code>this</code>, Function Context, Constructors & Method Borrowing</h3>

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-Learning-yellow?style=for-the-badge&logo=javascript" />
  <img src="https://img.shields.io/badge/Challenge-40DaysOfJS-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Status-Completed-success?style=for-the-badge" />
</p>

---

## 📚 Table of Contents

- [📌 Overview](#-overview)
- [🧠 Understanding `this`](#-understanding-this)
- [🌍 Global Scope](#-global-scope)
- [📦 Object Methods](#-object-methods)
- [⚠ Standalone Functions](#-standalone-functions)
- [🏹 Arrow Functions](#-arrow-functions)
- [❌ Common Problems & Fixes](#-common-problems--fixes)
- [🏗 Constructor Functions](#-constructor-functions)
- [🚗 Method Borrowing](#-method-borrowing)
- [🧪 Arrow vs Regular Functions](#-arrow-vs-regular-functions)
- [🔥 Key Takeaways](#-key-takeaways)
- [🎯 Learning Outcome](#-learning-outcome)

---

## 📌 Overview

This project explores how the **`this` keyword** works in JavaScript across different situations.  
It also demonstrates:

✅ Function context  
✅ Arrow vs regular functions  
✅ Constructor functions  
✅ Method borrowing  
✅ Fixing common `this` mistakes  

---

## 🧠 Understanding `this`

👉 The value of `this` depends on **how a function is called**, NOT where it is written.

| Situation | Value of `this` |
|-----------|-------------|
| Global Scope | Global object |
| Object Method | The object |
| Standalone Function | Global object or `undefined` |
| Arrow Function | Inherits surrounding scope |
| Constructor Function | Newly created object |

---

## 🌍 Global Scope

```javascript
console.log(this);

📝 Explanation

Browser → window

Node.js → global

📦 Object Methods
const user = {
  name: "Tom",
  greet() {
    console.log(this.name);
  }
};

user.greet();


✅ Output:

Tom


👉 this refers to the object calling the method.

⚠ Standalone Functions
function show() {
  console.log(this);
}

show();

📝 Explanation

Non strict mode → Global object

Strict mode → undefined

🏹 Arrow Functions
const show = () => {
  console.log(this);
};


👉 Arrow functions do NOT create their own this
👉 They inherit this from their surrounding scope.

❌ Common Problems & Fixes
Problem 1: Losing this
const obj = {
  name: "Tom",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

const greetFn = obj.greet;
greetFn();


❌ Output:

Hello, undefined!

✅ Fix Using call
greetFn.call(obj);

✅ Fix Using apply
greetFn.apply(obj);

✅ Fix Using bind
const boundFn = greetFn.bind(obj);
boundFn();

✔ Arrow Function Inside Method
const user1 = {
  name: "Alex",
  greet: function () {
    const inner = () => {
      console.log(`Hello, ${this.name}!`);
    };
    inner();
  },
};


 Works correctly because arrow functions inherit this.

🏗 Constructor Functions

Constructor functions help create multiple similar objects.

function Sports(name, numPlayers){
  this.name = name;
  this.numPlayers = numPlayers;
}

let football = new Sports("Football", 11);
let volleyball = new Sports("Volleyball", 6);

🚗 Method Borrowing
Original Object
const car1 = {
  brand: "Audi",
  model: "A8",
  describe: function () {
    console.log(`This car is a ${this.brand} ${this.model}.`);
  },
};

Borrow Method for Another Object
const car2 = {
  brand: "BMW",
  model: "X1",
};

✔ Borrowing Methods
call()
car1.describe.call(car2);

apply()
car1.describe.apply(car2);

bind()
const describeCar = car1.describe.bind(car2);
describeCar();

🧪 Arrow vs Regular Functions
const person = {
  name: "Charlie",
  sayHello: function () {
    console.log(this.name);
  },
  sayHelloArrow: () => {
    console.log(this.name);
  },
};

✅ Output
Charlie
undefined


👉 Regular functions bind this to object
👉 Arrow functions inherit global this

🔥 Key Takeaways

✔ this depends on how a function is called
✔ Arrow functions inherit this
✔ Methods lose context when detached
✔ call, apply, bind fix context issues
✔ Constructors create reusable object templates

🎯 Learning Outcome

After this project, you should understand:

How JavaScript handles this

Differences between arrow and regular functions

How to fix context related bugs

How constructors create objects

How method borrowing works

📅 Challenge Progress

🔥 Part of 40 Days of JavaScript Challenge

✍ Author
👨‍💻 Oluwole Greatness Adeola

🌐 Learning JavaScript Daily

🚀 Building Strong Programming Foundations

<p align="center"> ⭐ If you found this helpful, consider giving the repo a star! </p> ```
