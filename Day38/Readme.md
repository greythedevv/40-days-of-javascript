# Day 38 of 40 Days of JavaScript

## 📅 Overview
This project is part of the **40 Days of JavaScript** challenge. On **Day 38**, we focus on **Memory Management, References, and DOM Leak Detection**. Understanding these concepts is crucial for writing efficient, bug-free JavaScript applications, especially in long-running web apps or SPAs.

---

## 📝 Topics Covered

1. **Object References and Reachability**
   - Understanding how JavaScript stores objects by reference.
   - Difference between **primitive values** and **objects**.
   - When objects become **reachable or unreachable** for garbage collection.

2. **Cyclic References**
   - How objects referencing each other can create cycles.
   - Modern JS garbage collectors handle cycles automatically.
   - Breaking cycles manually to avoid memory retention.

3. **Memory Leaks**
   - What causes memory leaks in JS: globals, closures, DOM elements, timers, event listeners.
   - How to prevent memory leaks:
     - Remove references when objects are no longer needed.
     - Remove event listeners before deleting DOM nodes.
     - Nullify large objects in long-running apps.

4. **DOM Leak Detection and Fix**
   - Example: Button element referencing an external variable in a closure.
   - Removing DOM element without removing event listener causes a memory leak.
   - Fix: Remove the event listener and clear references to allow garbage collection.

---

## 💻 Example Code Snippets

### Reachable vs Unreachable Objects
```javascript
let user = { name: "John" };
let profile = { owner: user };

user = null;

console.log(profile.owner); // Object is still reachable