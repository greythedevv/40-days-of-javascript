Day 12 of 40 Days of JavaScript - Task.js Practice Exercises
Overview

This project demonstrates various JavaScript concepts including:

Nullish coalescing operator (??)

Object freezing

Object destructuring (including nested destructuring)

Methods in objects

Loops with destructuring

Object property checks

Deep copying of objects

Differences between Object.keys() and Object.entries()

Each section contains examples, explanations, and expected outputs.

1. Nullish Coalescing (??)
const usere = { name: "Alex", age: undefined };
console.log(usere.age ?? "Not provided"); // Output: "Not provided"


Explanation:
?? returns the right-hand value only if the left-hand value is null or undefined.
Here, age is undefined, so "Not provided" is printed.

2. Freezing Objects
const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a); // Output: 1


Explanation:
Object.freeze() prevents any modifications to the object properties.

3. Nested Object Destructuring
const person = {
  name: "Tapas",
  company: {
    name: "tapaScript",
    location: {
      city: "Bangalore",
      zip: "94107"
    }
  }
};


const { name, company, company: { location: { city } } } = person;
console.log(name);    // Tapas
console.log(company); // { name: "tapaScript", location: {...} }
console.log(city);    // Bangalore


Explanation:
Nested destructuring allows extracting values from deep objects in a concise way.

4. Student Management System
const studenqt = {
    name: "Tunde",
    age: 20,
    grades: [70, 85, 90, 60],

    calculateAverageGrade() {
        let total = 0;
        for (let grade of this.grades) {
            total += grade;
        }
        return total / this.grades.length;
    }
};

console.log(studenqt.name);                  // Tunde
console.log(studenqt.calculateAverageGrade());// 76.25


Explanation:

grades stored in an array

calculateAverageGrade() computes the average using a loop and this.grades

5. Book Store Inventory System
let Book = {
    romance: "romance",
    boring: "boring",
    intresting: "intresting"
}

console.log("romance" in Book); // true

let { nonintresting = "nonintresting" } = Book;
console.log("nonintresting" in Book); // false


Explanation:

"in" operator checks if a property exists

Destructuring with a default value does not create a property in the object

6. Object.keys() vs Object.entries()
const user = { name: "Alex", age: 25, country: "Nigeria" };

console.log(Object.keys(user));   // ["name", "age", "country"]
console.log(Object.entries(user)); // [["name", "Alex"], ["age", 25], ["country", "Nigeria"]]


Explanation:

Object.keys() → array of property names

Object.entries() → array of [key, value] pairs

7. Checking Object Properties
const usesr = { name: "Alex", age: 25 };

console.log("name" in usesr);  // true
console.log("email" in usesr); // false


Explanation:

"key" in object returns true if the property exists (including prototype chain)

8. Reference vs Copy
const persson = { name: "John" };
const newPerson = persson;
newPerson.name = "Doe";
console.log(persson.name); // Doe


Explanation:
Objects are reference types, so both variables point to the same object in memory.

9. Deep Copying Objects
let original = { name1: "grey", details: { hobbies: "sleeping", age: 23 } };
let copy = structuredClone(original);

copy.name1 = "blue";
copy.details.hobbies = "playing";

console.log(copy.name1);    // blue
console.log(original.name1);// grey


Explanation:

structuredClone() creates a deep copy, so nested objects are also copied

10. Looping with Destructuring
const users2 = [
  { name2: "Alex", address: "15th Park Avenue", age: 43 },
  { name2: "Bob", address: "Canada", age: 53 },
  { name2: "Carl", address: "Bangalore", age: 26 }
];

for (let { name2, address, age } of users2) {
    console.log(name2, address, age);
}


Output:

Alex 15th Park Avenue 43
Bob Canada 53
Carl Bangalore 26


Explanation:

Array destructuring inside a loop extracts object properties directly

✅ Key Takeaways

Use ?? for nullish checks

Object.freeze() prevents object mutation

Destructuring is great for nested objects and arrays

Methods can be added to objects for calculations

"in" and hasOwnProperty() are used to check object properties

structuredClone() is best for deep copies

Looping with destructuring makes iterating arrays of objects clean

This README is now clearly labeled as Day 12 of 40 Days of JS and summarizes your entire task.js file.
