📘 Day 10 of 40 Days of JavaScript
Scope, Closures, Hoisting, and Execution Context

This day focused on understanding how JavaScript handles scope, closures, hoisting, variable shadowing, and execution contexts. These concepts are fundamental to writing predictable and maintainable JavaScript code.

📌 Topics Covered
1️⃣ Lexical Scope and Closures
Example: Nested Function Scope
let user = "Alice";

function outer() {
    function inner() {
        console.log(user);
    }
    let user = "Bob";
    inner();
}

outer();

✅ Explanation

JavaScript uses lexical scoping

The inner function accesses the closest user variable available in its scope chain.

Output:

Bob

2️⃣ Global Variables and Best Practices
Example:
let total = 0;

function add(num) {
    total += num;
}

add(5);
add(10);
console.log(total);

⚠️ Issue

Using global variables is bad practice because:

Any part of the program can modify them

Makes debugging difficult

Reduces function reusability

✅ Recommended Approach

Use parameters or closures to control state.

3️⃣ Nested Functions and Parent Scope Access
function parentFunction() {
    let parent = "I am the parent function";

    function childFunction() {
        console.log(parent);
    }

    childFunction();
}

parentFunction();

✅ Key Concept

Inner functions can access variables from parent functions.

This behavior forms the basis of closures.

4️⃣ Loop Scope (let vs var)
Using var:
function loopFunction() {
    for (let i = 0; i <= 5; i++) {
        var lname = "great";
    }
    console.log(lname);
}

loopFunction();

✅ Result

var is function scoped

Accessible outside loop

Using let instead:
for (let i = 0; i <= 5; i++) {
    let lname = "great";
}
console.log(lname);

❌ Result

Throws ReferenceError

let is block scoped

5️⃣ Temporal Dead Zone (TDZ)
console.log(a);
let a = 10;

❌ Output
ReferenceError

✅ Explanation

let and const are hoisted

But remain uninitialized until declaration line executes

6️⃣ Local Scope Accessibility
function showAge() {
    let age = 25;
    console.log(age);
}

console.log(age);

❌ Output
ReferenceError

✅ Explanation

age exists only inside showAge function

7️⃣ Variable Shadowing
let message = "Hello";

function outer() {
    let message = "Hi";

    function inner() {
        console.log(message);
    }

    inner();
}

outer();

✅ Output
Hi


Shadowing occurs when a variable inside a function overrides one from a higher scope.

8️⃣ Multiple Shadowing Levels
let x = "Global";

function outer() {
    let x = "Outer";

    function inner() {
        let x = "Inner";
        console.log(x);
    }

    inner();
}

outer();

✅ Output
Inner

9️⃣ Closures with State Persistence
function counter() {
    let count = 0;
    return function () {
        count--;
        console.log(count);
    };
}

const reduce = counter();
reduce();
reduce();

✅ Output
-1
-2

Explanation

Inner function retains access to count

Demonstrates closure maintaining private state

🧠 Key Learnings

JavaScript resolves variables using lexical scope

Closures allow inner functions to remember outer variables

let and const are block scoped

var is function scoped

TDZ prevents using variables before initialization

Variable shadowing affects scope resolution

Avoid global variables for maintainable code

🚀 Skills Practiced

✔ Execution Context Understanding
✔ Scope Chain Navigation
✔ Closure Implementation
✔ Hoisting and TDZ Behavior
✔ Debugging Scope Related Errors
✔ Writing Cleaner and Safer Functions

📅 Progress

✅ Day 10 Completed
🔜 Moving deeper into advanced function patterns and memory behavior





