# Day 32 of 40 Days of JavaScript

## Modules, Promises, and Application Structure

Today focused on learning how to structure JavaScript projects using **modules**, understand **Promises for asynchronous operations**, and build **modular applications** that separate logic, data, and UI responsibilities.

---

## 1. JavaScript Modules (Import & Export)

Modules help organize code into separate files so that each file handles a specific responsibility.

### Named Export

```javascript
// user.js
export const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];
```

Importing named exports:

```javascript
import { users } from "./user.js";
```

### Default Export

```javascript
// add.js
export default function add(a, b) {
  return a + b;
}
```

Importing default export:

```javascript
import add from "./add.js";
```

Key difference:

| Type           | Syntax                                |
| -------------- | ------------------------------------- |
| Named Export   | `export { name }` → `import { name }` |
| Default Export | `export default` → `import name`      |

---

## 2. Understanding Array Methods

Modern JavaScript provides powerful array methods that make data manipulation easier.

### `forEach`

Used to loop through an array and perform an action.

```javascript
users.forEach(user => console.log(user.name));
```

### `filter`

Returns a new array that matches a condition.

```javascript
const activeUsers = users.filter(user => user.id > 1);
```

### `find`

Returns the first element that matches a condition.

```javascript
const user = users.find(user => user.id === 2);
```

These methods are often called **array methods** or **higher-order functions**.

---

## 3. Working with Promises

Promises handle **asynchronous operations** such as fetching data from APIs.

### Basic Promise Example

```javascript
const checkEven = (num) => {
  return new Promise((resolve, reject) => {
    if (num % 2 === 0) {
      resolve("Number is even");
    } else {
      reject("Number is odd");
    }
  });
};
```

Using the Promise:

```javascript
checkEven(4)
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

Key idea:

| Method      | Purpose                         |
| ----------- | ------------------------------- |
| `resolve()` | Marks the promise as successful |
| `reject()`  | Marks the promise as failed     |
| `.then()`   | Handles success                 |
| `.catch()`  | Handles errors                  |

---

## 4. Mock API Module

A **mock API** simulates a backend server so the frontend can interact with data like it would with a real API.

### Example API Module

```javascript
// api.js
import { users } from "./user.js";

export function fetchUsers() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(users);
    }, 1500);
  });
}
```

Usage in the frontend:

```javascript
import { fetchUsers } from "./api.js";

fetchUsers()
  .then(users => console.log(users))
  .catch(error => console.error(error));
```

Important concept:

* `api.js` → provides the data
* `main.js` → decides what to do with the data

---

## 5. Modular Quiz App

To practice modules, a quiz application was divided into multiple files.

### Project Structure

```
quiz-app/
│
├── questions.js
├── quizLogic.js
├── ui.js
├── main.js
└── index.html
```

### Responsibilities

| File           | Purpose                       |
| -------------- | ----------------------------- |
| `questions.js` | Stores quiz data              |
| `quizLogic.js` | Handles quiz flow and scoring |
| `ui.js`        | Updates the DOM               |
| `main.js`      | Runs and connects the app     |

This structure improves:

* code organization
* maintainability
* scalability

---

## Key Lessons from Day 32

* JavaScript **modules** help structure large applications.
* `import` and `export` allow code reuse across files.
* **Array methods** like `forEach`, `filter`, and `find` simplify data operations.
* **Promises** handle asynchronous tasks and API-like operations.
* Separating **logic, data, and UI** leads to cleaner and more maintainable code.

---

## Summary

Day 32 focused on moving from small scripts to **structured JavaScript applications**. By combining modules, Promises, and modular architecture, it becomes easier to build scalable projects that resemble real-world applications.
