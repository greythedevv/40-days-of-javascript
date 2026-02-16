console.log ("welcome to task.js")

// What will be the output and why?
const usere = { name: "Alex", age: undefined };
console.log(usere.age ?? "Not provided");
//  not provided

//  What will happen if we try to modify a frozen object?
const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a);
//  it wont change because of the freeze

//  Given an object with deeply nested properties, extract name, company, and address.city using 
// destructuring
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

const {name, company, company:{location:{city}} } = person;
console.log(name)
console.log(company)
console.log(city)

// Build a Student Management System
// Store student details in an object (name, age, grades).
// Implement a method to calculate the average grade.

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

console.log(studenqt.name);
console.log(studenqt.calculateAverageGrade());


// Book Store Inventory System
// Store books in an object.
// Add functionality to check availability and restock books.

let Book = {
    romance:"romance",
    boring:"boring",
    intresting:"intresting"
}

console.log ("romance" in Book);


let {nonintresting ="nonintresting"} = Book

console.log("nonintresting" in Book)


// . What is the difference between Object.keys() and Object.entries()? Explain with examples

// 1. Object.keys()

// Returns an array of the object’s keys.

// Only keys, no values.

// Example:

// const user = { name: "Alex", age: 25, country: "Nigeria" };

// console.log(Object.keys(user));


// Output:

// ["name", "age", "country"]


//  Explanation:
// Object.keys() looks at the object and only collects the property names.

// 2. Object.entries()

// Returns an array of key-value pairs.

// Each key-value pair is represented as a 2-element array: [key, value].

// Example:

// const user = { name: "Alex", age: 25, country: "Nigeria" };

// console.log(Object.entries(user));


// Output:

// [ ["name", "Alex"], ["age", 25], ["country", "Nigeria"] ]


// Explanation:
// Object.entries() goes one step further than Object.keys() — it gives both the keys and their corresponding values.


//How do you check if an object has a certain property?
const usesr = { name: "Alex", age: 25 };

console.log("name" in usesr); // true
console.log("email" in usesr); // false


// What will be the output and why?
const persson = { name: "John" };
const newPerson = persson;
newPerson.name = "Doe";
console.log(persson.name);
// the output will be doe because both newPerson and persson are pointing to the same object in memory.
// when we change the name property of newPerson, it also changes the name property of persson since 
// they reference the same object.

// What’s the best way to deeply copy a nested object? Expalin with examples

// structuredClone() is the best way to deeply copy a nested object in JavaScript. It creates a deep copy
//  of the object, including all nested properties and values, without any reference to the original
//  object.

// Example:

let original = { name1 : "grey", details:{ hobbies: "sleeeping" , age:23}}

let copy  = structuredClone (original)
copy.name1 = "blue"
copy.details.hobbies = "playing"


console.log(copy.name1)
console.log(original.name1)





// Loop and print values using Object destructuiring
const users2 = [
  {
      'name2': 'Alex',
      'address': '15th Park Avenue',
      'age': 43
  },
  {
      'name2': 'Bob',
      'address': 'Canada',
      'age': 53
  },
  {
      'name2': 'Carl',
      'address': 'Bangalore',
      'age': 26
  }
];
for(let {name2, address, age} of users2){
    console.log(name2, address, age)
}


