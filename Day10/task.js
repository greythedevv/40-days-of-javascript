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

