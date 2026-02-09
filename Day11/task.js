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

// function setupButton() {
//     let clickCount = 0;

//     document.getElementById("myButton").addEventListener("click", function() {
//         clickCount++;
//         console.log(`Button clicked ${clickCount} times`);
//     });
// }

// setupButton();


// Write a function createMultiplier(multiplier) that returns another function to multiply numbers.

function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}
const double = createMultiplier(2);
double(5);



// What happens if a closure references an object?
// The object is garbage collected immediately
// The object remains in memory as long as the closure exists
// The object is automatically cloned
// None of the Above.

// the object remains in memory as long as the closure exist because the closure has a reference
//  to the object and it will not be garbage collected until the closure itself is garbage collected.

// Write a function factory of counter to increment, decrement, and reset a counter. Use closure to refer 
// the count value across the functuions

function factoryCounter(value){
    let count = value;
    let initialValue = value;
    

    return {
        increment: function (){
            count ++
            console.log(count)
        },

        decrement : function (){
            count --
            console.log(count)
        },
        reset: function reset(){
            count = initialValue;
            console.log(count)
        }
    }
}
let grey = factoryCounter(104);
console.log(grey.reset())