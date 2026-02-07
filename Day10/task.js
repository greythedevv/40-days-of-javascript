console.log("hello there");

let user = "Alice";

function outer() {
    function inner() {
        console.log(user);
    }
    let user = "Bob";
    inner();
}

outer();
// the console will print out bob because that is the cloest user variable to the console.log 

//  What is the mistake in the code below?

let total = 0; // Global, bad practice

function add(num) {
    total += num;
}

add(5);
add(10);
console.log(total);

// The mistake in the code is that the variable 'total' is declared in the global scope, which can lead to
// unintended consequences if other parts of the code also use a variable named 'total'. It is generally 
// considered bad practice to use global variables because they can be modified from anywhere in the code,
// making it harder to track changes and debug issues. A better approach would be to declare 'total' 
// within a function or use a closure to encapsulate it.


// Create a function with a nested function and log a variable from the parent function.

function parentFunction(){
    let parent = "i am the parent function"
    console.log(parent)
    function childFunction(){
        console.log("this the the child function")
    }
}

parentFunction();

// Use a loop inside a function and declare a variable inside the loop. Can you access it outside?

function loopFunction(){
    for ( let i = 0; i<=5; i++){
        var lname = "great"
        // console.log(lname)
    }
    console.log(lname)
}
loopFunction();

 // this will give an error because lname is declared inside the loop and cannot be
//  accessed outside of it. only if the variable was declared with var instead of let, it would be
//  accessible outside the loop.

// Write a function that tries to access a variable declared inside another function.
// function outerFunction() {
//     let church ="NEBC"
// }

// function innerFunction(){
//     console.log(church)
// }

// innerFunction();

//  What will be the output and why?

// console.log(a);
// let a = 10;

// the output will be ReferenceError because the console.log is in the TDZ and the let variable will not be assigned 
// undefined in the creation phase of the GEC


//  Where is the age variable accessible?
function showAge() {
    let age = 25;
    console.log(age);
}

console.log(age);
// Options:

// A: In Global
// B: Only inside showAge
// C: It will cause an error
// D: None of the above

// it will only be accessible in the showAge function because it is declared with let and is in the
// local scope of the function.   



// What will be the output and explain the output?
let message = "Hello";

function outer() {
    let message = "Hi";

    function inner() {
        console.log(message);
    }

    inner();
}

outer();

// the output will be "hi" because of variable shadowing. The inner function will look for the variable
//  'message' in its own scope first, and if it doesn't find it, it will look in the outer function's
//  scope. Since there is a variable named 'message' in the outer function, it will use that value
//  instead of the global variable.


// What will be the output and why?
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

// the outpt will be "inner" because of variable shadowing. The inner function will look for the variable
// 'x' in its own scope first, and since there is a variable named 'x' in the inner function, it will use
//  that value instead of the outer or global variable.

// 10. What will be the output and why?
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

// the output will be -1 and -2 because the inner function is a closure that has access to the 'count' 
// variable
// in the outer function. Each time the inner function is called, it decrements the 'count' variable and 
// logs the updated value.