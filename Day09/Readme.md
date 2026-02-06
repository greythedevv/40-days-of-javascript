📘 Day 09 of 40 Days of JavaScript
🚀 Progress Update

Today’s learning focused on understanding how JavaScript handles variables and functions behind the scenes. I explored important concepts like Hoisting and the Temporal Dead Zone (TDZ). These concepts helped me understand why some variables behave differently depending on how they are declared.

📚 What I Learned
✅ Variable Hoisting

Hoisting is JavaScript's behavior of moving variable declarations to the top of their scope before code execution.

Variables declared with var are hoisted and initialized with undefined.

This means they can be accessed before assignment without causing an error.

✅ Function Hoisting

Function declarations are fully hoisted.

Functions can be called before they are declared in the code.

This makes function declarations different from function expressions.

✅ Temporal Dead Zone (TDZ)

The Temporal Dead Zone happens with variables declared using let and const.

The variable is hoisted but cannot be accessed before its declaration.

Trying to use it before declaration causes a ReferenceError.

🧠 Key Takeaways

var allows access before assignment but returns undefined.

let and const prevent access before declaration.

Function declarations are accessible before they appear in code.

Understanding hoisting helps avoid unexpected bugs.

💻 Code Practiced
Temporal Dead Zone Example
console.log(level);
let level = "10th grade";

console.log(hobby);
let hobby = "coding";

console.log(job);
let job = "software engineer";

Variable Hoisting Example
var a;

console.log(a);

a = 10;

console.log(a);

Function Hoisting Example
sayHello();

function sayHello(){
    console.log("Hello World");
}

🎯 Reflection

Learning how JavaScript processes variables and functions internally is helping me build stronger fundamentals. Every new concept makes debugging easier and improves my confidence while writing code.

📅 Challenge Progress

✅ Day 09 Completed
⏳ 31 Days To Go