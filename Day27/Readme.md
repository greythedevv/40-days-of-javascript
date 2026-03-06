# Day 27 of 40 Days of JavaScript

## 📌 Title: Understanding JavaScript Event Loop, Promises, and setTimeout

### Overview
On Day 27, we explored how JavaScript handles asynchronous code using the **Event Loop**, **Call Stack**, **Callback Queue**, **Promises (microtasks)**, and **setTimeout (macrotasks)**. These exercises help you understand the order in which code executes, even when combining synchronous and asynchronous functions.

---

### Exercises and Key Learnings

#### 1. Synchronous Execution
```javascript
function f1() {
    console.log('f1');
}

console.log("Let's do it!");

f1();
f1();
f1();
f1();

Output:

Let's do it!
f1
f1
f1
f1

Explanation: All calls are synchronous, executed directly on the call stack.

2. setTimeout Example
setTimeout(() => console.log('in settimeout'), 0);

Output when combined with synchronous code:

Let's do it!
f1
f1
f1
f1
in settimeout

setTimeout callbacks are added to the macrotask queue and only run after the stack is empty.

3. True/False Concepts

✅ JavaScript is single-threaded

✅ By default, JavaScript is synchronous

❌ Only promises make JS asynchronous

❌ All function callbacks are asynchronous

4. Event Loop Priority

✅ The job queue (microtasks) has higher priority than the callback queue (macrotasks).

5. Promise and setTimeout Interaction
const cartoon = () => {
  console.log('Cartoon');
  setTimeout(tom, 5000);
  new Promise(resolve => resolve('Promise resolved')).then(console.log);
  jerry();
}

Output:

Cartoon
Jerry
Promise resolved
Tom

Promises execute as microtasks, before setTimeout (macrotask).

6. Multiple Promises and setTimeout
setTimeout(tom1, 50);
setTimeout(doggy, 30);
Promise.resolve('I am a Promise!').then(console.log);
Promise.resolve('Another Promise!').then(console.log);
jerry1();

Output:

Cartoon
Jerry
I am a Promise!
Another Promise!
Doggy
Tom

Microtasks (Promises) execute before macrotasks (setTimeout), and setTimeout executes by shortest delay first.

7. Combining Multiple Promises and setTimeout
f4();
setTimeout(f1, 0);
Promise.resolve('Boom').then(console.log);
setTimeout(f2, 2000);
Promise.resolve('Sonic').then(console.log);
setTimeout(f3, 0);
Promise.resolve('Albert').then(console.log);

Output:

f4
Boom
Sonic
Albert
f1
f3
f2

Shows the execution order combining synchronous code, microtasks, and macrotasks.

8. Advanced setTimeout and Promise Example
f4();
setTimeout(f1, 0);
Promise.resolve('Sonic').then(console.log);
setTimeout(f3, 0);
Promise.resolve('Albert').then(console.log);

Output:

f4
Sonic
Albert
f1
f2
f3

Demonstrates nested calls and how setTimeout inside functions behaves with Promises.

✅ Key Takeaways

Synchronous code executes immediately on the call stack.

setTimeout adds a function to the macrotask queue.

Promises add callbacks to the microtask queue, which runs before macrotasks.

Understanding the event loop is crucial to predict execution order in JavaScript.

🖼 Event Loop Timeline
Call Stack            Microtask Queue           Macrotask Queue
--------------------------------------------------------------
console.log('f4')       -                        -
                        Promise.then('Sonic')   setTimeout(f1)
                        Promise.then('Albert')  setTimeout(f3)
                                                setTimeout(f2)

Execution order visualization:

f4() → Call Stack

Promise.then('Sonic') → Microtask

Promise.then('Albert') → Microtask

setTimeout(f1) → Macrotask

setTimeout(f3) → Macrotask

setTimeout(f2) → Macrotask

Resulting console output:

f4
Sonic
Albert
f1
f2
f3