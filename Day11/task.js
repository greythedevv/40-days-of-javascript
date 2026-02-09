//  What will be the output of the following code and why?
function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}
const counter = outer();
counter();
counter();

//1, 2 because we called the count twice there by the inner only calls

//  What will be the output and why?

function testClosure() {
    let x = 10;
    return function () {
        return x * x;
    };
}
console.log(testClosure()());
// 100 because of closure the inner function has access to the outer even after it has been executed

// Create a button dynamically and attach a click event handler using a closure. The handler should count
// and log how many times the button was clicked.

function setupButton() {
    let clickCount = 0;

    document.getElementById("myButton").addEventListener("click", function() {
        clickCount++;
        console.log(`Button clicked ${clickCount} times`);
    });
}

setupButton();



