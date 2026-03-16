// 1. Identify Reachable vs Unreachable Objects
// Write a small program where:

// You create an object user
// Create a second object profile that references user
// Then set user = null
// Is the original user object still reachable? Why or why not?

let user = {
  name: "John"
};

let profile = {
  owner: user
};

user = null;

console.log(profile.owner);

// the Original user Object Still Reachable? ✅

// Yes, it is still reachable.

// This is because the object is still referenced by profile.owner. JavaScript’s garbage collector only removes objects that have no references pointing to them.

// Since profile.owner still points to the object, it cannot be garbage collected.


// 2. Simulate and Break a Cyclic Reference
// Observe how cyclic references can cause memory retention.

// Create two objects a and b
// Make them reference each other (a.ref = b and b.ref = a)
// Nullify external references to both
// Explain why this may or may not cause a memory leak. Add a.ref = null; b.ref = null; 
// and explain how it helps

// 3. DOM Leak Detection and Fix
// Learn how DOM elements and closures can create memory leaks.

// Create a button using JavaScript
// Add an event listener that references a variable outside the listener
// Remove the button from the DOM, but not the event listener
// Identify the leak & fix it.

let userData = { name: "John" };
let button = document.createElement("button");
button.textContent = "Click Me!";
document.body.appendChild(button);

function handleClick() {
  console.log("User:", userData.name);
}

button.addEventListener("click", handleClick);

// Later, remove safely
button.removeEventListener("click", handleClick);
document.body.removeChild(button);

// Clear references
button = null;
userData = null;