Day 22 of 40 Days – JavaScript Callbacks

🌟 Day 22 of 40 Days – Making progress on learning JavaScript callbacks!

Today’s focus: understanding how to pass functions as arguments, use callbacks for asynchronous tasks, and execute tasks in sequence.

📂 Project Overview

This project demonstrates callbacks in JavaScript with practical examples:

Greeting a user and thanking them

Calculator operations using callbacks

Delayed messages with setTimeout

Filtering arrays with conditions via callbacks

Executing a sequence of tasks one after another

💻 Examples Implemented
1. Greet a User and Thank Them
function greet(name, callback){
    console.log(`Hello ${name}, welcome!`);
    callback();
}

greet("Great", function(){
    console.log("Thank you for visiting our website");
});
2. Calculator with Callback
function calculator(a, b, operationCallback) {
    return operationCallback(a, b);
}

function add(x, y) {
    return x + y;
}

console.log(calculator(5, 3, add)); // Output: 8
3. Delayed Message with setTimeout
function delayedMessage(message, delay, callback) {
    console.log(message);
    setTimeout(() => {
        callback();
    }, delay);
}

delayedMessage("Task complete", 2000, () => console.log("Callback Fired!"));
4. Filter Numbers in an Array Using Callback
function filterNumbers(arr, conditionCallback) {
    let filteredArr = [];
    for(let n = 0; n < arr.length; n++){
        if(conditionCallback(arr[n])){
            filteredArr.push(arr[n]);
        }
    }
    return filteredArr;
}

console.log(filterNumbers([1, 2, 3, 4], n => n > 2)); // Output: [3, 4]
5. Execute Tasks in Sequence Using Nested Callbacks
function task1(callback) {
    console.log("Task 1 done");
    callback();
}

function task2(callback) {
    console.log("Task 2 done");
    callback();
}

function task3() {
    console.log("Task 3 done");
}

task1(function(){
    task2(function(){
        task3();
    });
});
🔑 Key Concepts

Callbacks: Functions passed as arguments to be executed later.

Function Passing vs Calling: Pass the function itself (add) instead of calling it immediately (add()) when you want it to run later.

Asynchronous Execution: Using callbacks allows handling tasks like setTimeout without blocking the code.

Sequential Tasks: Nested callbacks let you run tasks in order.

📌 Usage

Copy the code into a .js file (e.g., index.js).

Run it in Node.js or browser console.

Observe how each callback executes and how tasks run in order.