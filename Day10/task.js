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