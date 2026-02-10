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
