// 1. Create a Simple Prototype Chain
// Define a base object animal with a method eat.
// Create another object dog that inherits from animal using Object.create.
// Call eat from dog and explain how the prototype chain resolves it.


// Base object
const animal = {
  eat() {
    console.log("Animal eats");
  }
};

// dog inherits from animal
const dog = Object.create(animal);

// Call eat from dog
dog.eat();

// 2. Build a Custom Constructor Function
// Create a constructor function Book(title, author).
// Add a method getDetails() to the prototype of Book.
// Instantiate two books and show they share the method from the prototype.

function Book(title, author) {
  this.title = title;
  this.author = author;
}

// Add method to the prototype
Book.prototype.getDetails = function () {
  console.log(`The ${this.title} is written by ${this.author}`);
};

// Create book objects
let book1 = new Book("Atomic Habits", "James Clear");
let book2 = new Book("Deep Work", "Cal Newport");

// Call the method
book1.getDetails();
book2.getDetails();


// 3. Compare Object Creation Patterns
// Create three objects using:

// Object literals
// Constructor functions
// Object.create
// Add similar methods and compare how inheritance works in each pattern.

let user ={
    name: "adeola",
    greet(){
        console.log(`Hello ${this.name}`)
    }
}
user.greet()

function user1(name){
    this.name = name
}

user1.prototype.greet = function(){
    console.log(`hello ${this.name}`)
}

let person2 = new user1("greatness")
person2.greet()

let user2 = {
    greet(){
        console.log(`hello ${this.name}`)
    }
}

let user3 = Object.create(user2)
user3.name = "baglore"

user3.greet()

// 4. Simulate a Real-World Inheritance Chain
// Simulate a real-life hierarchy: Person → Student → GraduateStudent.
// Each level should add its own methods or properties using prototypes.
// Show how a GraduateStudent can access methods from both Student and Person.

// Base constructor
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`);
};


// Student inherits from Person
function Student(name, course) {
  Person.call(this, name); // inherit properties
  this.course = course;
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.study = function () {
  console.log(`${this.name} is studying ${this.course}`);
};


// GraduateStudent inherits from Student
function GraduateStudent(name, course, researchTopic) {
  Student.call(this, name, course);
  this.researchTopic = researchTopic;
}

GraduateStudent.prototype = Object.create(Student.prototype);

GraduateStudent.prototype.research = function () {
  console.log(`${this.name} is researching ${this.researchTopic}`);
};


// Create object
let grad = new GraduateStudent("Alice", "Computer Science", "Artificial Intelligence");

grad.sayHello();  // from Person
grad.study();     // from Student
grad.research();  // from GraduateStudent


// 5. Object.create vs Class vs Constructor Function
// Implement the same User entity using:
// Constructor Function
// ES6 Class
// Object.create
// Write a summary comparing syntax, readability, and prototype behavior.

// 1. Constructor Function
function User(name, email) {
  this.name = name;
  this.email = email;
}

User.prototype.getInfo = function () {
  console.log(`${this.name} - ${this.email}`);
};

const user1 = new User("Alice", "alice@mail.com");
user1.getInfo();

// How it works

// new User() creates an object.

// The method is stored in User.prototype, so all instances share it.

// Prototype chain:

// user1 → User.prototype → Object.prototype

// 2. ES6 Class

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  getInfo() {
    console.log(`${this.name} - ${this.email}`);
  }
}

const user22 = new User("Bob", "bob@mail.com");
user22.getInfo();

// How it works

// class is syntactic sugar over prototypes.

// Methods are still stored on the prototype.

// Prototype chain:

// user2 → User.prototype → Object.prototype

// 3. Object.create()

const userProto = {
  getInfo() {
    console.log(`${this.name} - ${this.email}`);
  }
};

const user3 = Object.create(userProto);
user3.name = "Charlie";
user3.email = "charlie@mail.com";

user3.getInfo();

// How it works

// user3 directly inherits from userProto.

// Prototype chain:

// user3 → userProto → Object.prototype