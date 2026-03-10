# Day 31 of 40 Days of JavaScript 🚀

## Understanding Prototypes and Inheritance in JavaScript

Today I focused on **JavaScript prototypes, constructor functions, and different object creation patterns**. These concepts are fundamental to understanding how **JavaScript handles inheritance and object behavior under the hood**.

---

# 1️⃣ Creating a Simple Prototype Chain

I created a base object `animal` with a method `eat()`, then created another object `dog` using `Object.create()` so that it inherits from `animal`.

### Example

```javascript
const animal = {
  eat() {
    console.log("Animal eats");
  }
};

const dog = Object.create(animal);

dog.eat();
```

### How the Prototype Chain Works

When `dog.eat()` is called:

1. JavaScript checks if `dog` has the `eat()` method.
2. If not found, it looks at `dog`'s prototype (`animal`).
3. It finds `eat()` in `animal` and executes it.

Prototype chain:

```
dog → animal → Object.prototype → null
```

---

# 2️⃣ Custom Constructor Function

I created a constructor function `Book(title, author)` and added a shared method `getDetails()` using the prototype.

### Example

```javascript
function Book(title, author) {
  this.title = title;
  this.author = author;
}

Book.prototype.getDetails = function () {
  console.log(`The ${this.title} is written by ${this.author}`);
};

let book1 = new Book("Atomic Habits", "James Clear");
let book2 = new Book("Deep Work", "Cal Newport");

book1.getDetails();
book2.getDetails();
```

### Key Idea

Both `book1` and `book2` share the **same method in memory** because it is stored in `Book.prototype`.

Prototype chain:

```
book1 → Book.prototype → Object.prototype → null
```

---

# 3️⃣ Comparing Object Creation Patterns

I created objects using **three different approaches**.

### Object Literal

```javascript
let user = {
  name: "adeola",
  greet(){
    console.log(`Hello ${this.name}`);
  }
}
```

### Constructor Function

```javascript
function User(name){
  this.name = name;
}

User.prototype.greet = function(){
  console.log(`hello ${this.name}`);
}

let person2 = new User("greatness");
person2.greet();
```

### Object.create()

```javascript
let userProto = {
  greet(){
    console.log(`hello ${this.name}`);
  }
}

let user3 = Object.create(userProto);
user3.name = "baglore";

user3.greet();
```

Each method creates objects differently but **all rely on the prototype system**.

---

# 4️⃣ Real-World Inheritance Chain

I simulated a hierarchy:

```
Person → Student → GraduateStudent
```

### Example

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`);
};

function Student(name, course) {
  Person.call(this, name);
  this.course = course;
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.study = function () {
  console.log(`${this.name} is studying ${this.course}`);
};

function GraduateStudent(name, course, researchTopic) {
  Student.call(this, name, course);
  this.researchTopic = researchTopic;
}

GraduateStudent.prototype = Object.create(Student.prototype);

GraduateStudent.prototype.research = function () {
  console.log(`${this.name} is researching ${this.researchTopic}`);
};

let grad = new GraduateStudent("Alice", "Computer Science", "Artificial Intelligence");

grad.sayHello();
grad.study();
grad.research();
```

### Prototype Chain

```
grad → GraduateStudent.prototype
     → Student.prototype
     → Person.prototype
     → Object.prototype
```

This allows `grad` to access methods from **all parent levels**.

---

# 5️⃣ Object.create vs Class vs Constructor Function

I implemented the same `User` entity using three approaches.

## Constructor Function

```javascript
function User(name, email) {
  this.name = name;
  this.email = email;
}

User.prototype.getInfo = function () {
  console.log(`${this.name} - ${this.email}`);
};
```

## ES6 Class

```javascript
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  getInfo() {
    console.log(`${this.name} - ${this.email}`);
  }
}
```

## Object.create()

```javascript
const userProto = {
  getInfo() {
    console.log(`${this.name} - ${this.email}`);
  }
};

const user = Object.create(userProto);
user.name = "Charlie";
user.email = "charlie@mail.com";
```

---

# 📊 Comparison

| Approach             | Syntax         | Readability   | Prototype Behavior          |
| -------------------- | -------------- | ------------- | --------------------------- |
| Constructor Function | Older style    | Medium        | Methods stored in prototype |
| ES6 Class            | Modern syntax  | Very readable | Uses prototypes internally  |
| Object.create        | Manual control | Less readable | Direct prototype linking    |

---

# 📚 Key Takeaways

* JavaScript uses **prototypes for inheritance**, not classical classes.
* `Object.create()` directly links objects through prototypes.
* Constructor functions store shared methods in `.prototype`.
* ES6 classes are **syntactic sugar over the prototype system**.
* Understanding the **prototype chain** is essential for mastering JavaScript OOP.

---

✅ **Day 31 Summary**

Today I learned how JavaScript handles:

* Prototype chains
* Constructor functions
* Object inheritance
* Object creation patterns
* Real-world prototype hierarchies

These concepts help explain how **JavaScript objects share behavior efficiently**.

---

🔥 **Next Step:**
Deep dive into **the prototype chain and `__proto__` vs `prototype`**, which is one of the most confusing but powerful parts of JavaScript.




