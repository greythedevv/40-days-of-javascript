# Day 35 of 40 Days of JavaScript

## Debugging Common JavaScript Pitfalls

Today’s focus was **debugging common JavaScript issues** that developers frequently encounter. These bugs usually come from misunderstandings about **closures, asynchronous behavior, mutation, and the event loop**.

This exercise explores four important debugging scenarios.

---

# 1. Closure Confusion

Closures allow a function to **remember variables from its outer scope even after that scope has finished executing**.

### Code

```javascript
function makeMultipliers() {
  const result = [];
  for (let i = 1; i <= 3; i++) {
    result.push(function (num) {
      return num * i;
    });
  }
  return result;
}

const [double, triple, quadruple] = makeMultipliers();

console.log(double(2));      
console.log(triple(2));      
console.log(quadruple(2));   
```

### Output

```
2
4
6
```

### Explanation

Each function inside the loop **closes over the variable `i`**. Because `let` is block scoped, every loop iteration creates a **new `i` binding**, allowing each function to remember the correct multiplier.

| Function  | i value | Result    |
| --------- | ------- | --------- |
| double    | 1       | 2 × 1 = 2 |
| triple    | 2       | 2 × 2 = 4 |
| quadruple | 3       | 2 × 3 = 6 |

If `var` had been used instead of `let`, all functions would return the same result because `var` is **function scoped**.

---

# 2. Async Bug with `setTimeout` in a Loop

JavaScript timers can cause confusion when used inside loops.

### Code

```javascript
for (let i = 0; i <= 3; i++) {
  setTimeout(function () {
    console.log("Count:", i);
  }, 1000);
}
``
```
