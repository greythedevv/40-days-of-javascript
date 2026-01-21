# Day 02 - Variables & Data Types

## 🎯 Goal of This Lesson

- Understanding what variables are
- How to visualize variables
- How variables get stored in memory
- JavaScript Data Types
- How JavaScript interprets code

## 📝 Topics Covered

### Variables in JavaScript
- `let` - block-scoped, reassignable
- `const` - block-scoped, constant reference
- `var` - function-scoped (legacy)

### Data Types
- **Primitive Types:**
  - String
  - Number
  - Boolean
  - Undefined
  - Null
  - Symbol
  - BigInt

- **Reference Types:**
  - Objects
  - Arrays
  - Functions

## 💻 Assignment Tasks

### ✅ Task 1: Variable Declarations
Declared variables for person's information:
```javascript
let name = "Greatness";
let age = 5;
let studentStatus = true;
let favoriteProgrammingLanguage = "JavaScript";
```

### ✅ Task 2: Console Output
Printed all variable values to the console:
```javascript
console.log("Name:", name);
console.log("Age:", age);
console.log("Student Status:", studentStatus);
console.log("Favorite Programming Language:", favoriteProgrammingLanguage);
```

### ✅ Task 3: Reassignment Testing
Successfully reassigned `let` variables:
```javascript
name = "Adeola";
age = 100;
```

Declared `const` variables (reassignment would throw error):
```javascript
const hobby = "Reading";
const country = "Nigeria";
```

### ✅ Task 4: Reference Types
Created and reassigned an object:
```javascript
let student = {
    name: "greatness",
    age: 5,
    studentStatus: true
};

// Reassigned entire object
student = {
    name: "baba",
    age: 50,
    studentStatus: false
};
```

Created and reassigned an array:
```javascript
let colors = ["red", "blue", "green"];

// Reassigned entire array
colors = ["yellow", "purple", "orange"];
```

## 🔑 Key Learnings

- Variables declared with `let` can be reassigned
- Variables declared with `const` cannot be reassigned
- Objects and arrays can be completely reassigned when using `let`
- Primitive types (string, number, boolean) are stored by value
- Reference types (objects, arrays) are stored by reference
- Understanding the difference between reassignment and mutation

## 📂 Files

- `README.md` - This file
- `code.js` - All code examples and exercises

## ✨ Completed

- [x] Watched video lesson
- [x] Completed Task 1 - Variable declarations
- [x] Completed Task 2 - Console output
- [x] Completed Task 3 - Reassignment testing
- [x] Completed Task 4 - Reference types
- [x] Pushed code to GitHub

---

**Date Completed:** January 21, 2026