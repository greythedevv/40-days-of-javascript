# Day 26 – 40 Days of JavaScript

## Common JavaScript Promise Mistakes

Today’s focus was understanding **common mistakes developers make when working with Promises in JavaScript**. Promises are powerful for handling asynchronous operations like API requests, but using them incorrectly can cause confusing bugs and inefficient code.

This exercise demonstrates **6 common mistakes** and the correct approaches.

---

# 1. Looping with Promises

A common mistake is looping through asynchronous operations without properly waiting for them to finish.

### Example Problem

Using a loop with `.then()` can make the code messy and harder to control.

```javascript
for (let i = 0; i < ids.length; i++) {
    const response = fetchData(ids[i]);
    response.then((response) => {
        response.json().then((data) => {
            console.log(data.name);
        });
    });
}
```

### Better Approach: `async/await`

```javascript
for (let i = 0; i < ids.length; i++) {
    const response = await fetchData(ids[i]);
    const data = await response.json();
    console.log(data.name);
}
```

### Best Approach for Multiple Requests

Using `Promise.allSettled()` allows multiple requests to run **in parallel**.

```javascript
const responses = await Promise.allSettled(ids.map((id) => fetchData(id)));
```

This improves **performance and readability**.

---

# 2. Promise Chain vs No Chain

Promises should usually be **chained** when the next operation depends on the previous result.

### Correct Chaining

```javascript
ten.then((result) => {
    return result + 10;
})
.then((result) => {
    return result * 10;
})
.then((result) => {
    return result - 10;
})
.then(console.log);
```

Each `.then()` receives the result of the previous step.

### Incorrect Usage

```javascript
ten.then((result) => result + 10);
ten.then((result) => result * 10);
ten.then((result) => result - 10);
ten.then(console.log);
```

All `.then()` calls run independently and receive the **original value** instead of the transformed value.

---

# 3. Not Handling Errors with Promises

Failing to handle errors can crash your application or hide bugs.

### Example

```javascript
oddEven(11)
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.error(err.message);
    });
```

Always include a `.catch()` when using Promises.

---

# 4. Missing a Function in `.then()`

`.then()` expects a **function**, not a value.

### Incorrect

```javascript
hello.then("World");
```

### Correct

```javascript
hello.then(() => "World");
```

---

# 5. Using Promises for Synchronous Operations

Promises should be used only for **asynchronous operations** like:

* API calls
* File reads
* Timers

If the data already exists (like in a cache), using a Promise is unnecessary.

### Better Pattern

```javascript
const getDataV2 = (email) => {
    const userFromCache = cache[email];

    if (userFromCache) {
        console.log(userFromCache);
    } else {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("Fetch from server");
            }, 2000);
        });
    }
};
```

---

# 6. Unnecessary `try...catch` in Promises

Wrapping code inside `try...catch` within a Promise is often redundant.

### Unnecessary

```javascript
new Promise((resolve, reject) => {
    try {
        const value = getValue();
        resolve(value);
    } catch (e) {
        reject(e);
    }
});
```

### Better

```javascript
new Promise((resolve) => {
    const value = getValue();
    resolve(value);
});
```

Errors automatically propagate to `.catch()`.

---

# Key Takeaways

* Use **async/await** to simplify Promise-based code.
* Use **Promise.all / Promise.allSettled** for parallel requests.
* Always **handle errors with `.catch()`**.
* Chain Promises properly when operations depend on each other.
* Avoid using Promises for synchronous logic.
* Keep Promise code clean and simple.

---

# Progress

**Day 26 / 40 – Completed**

Continuing the **40 Days of JavaScript Challenge** to deepen understanding of asynchronous JavaScript and modern development patterns.

---
