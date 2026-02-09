# Closure Practice – Multiplier & Counter

## Overview

This document explains how closures work in JavaScript using two examples:

1. Multiplier Function Factory
2. Counter Factory (Increment, Decrement, Reset)

---

# 1. Multiplier Function Factory

## Problem

Create a function `createMultiplier(multiplier)` that returns another function. The returned function should multiply numbers using the stored multiplier.

---

## Solution

```javascript
function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

// Example usage
const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
```

---

## Explanation

### Step 1 – Outer Function

The `createMultiplier` function receives a value called `multiplier`.

```javascript
createMultiplier(2);
```

Here, `multiplier` becomes `2`.

---

### Step 2 – Returning Inner Function

The outer function returns another function that accepts a number and multiplies it using `multiplier`.

---

### Step 3 – Closure

The inner function remembers `multiplier` even after the outer function finishes execution.

This is called **closure**.

---

## Why This Works

Closures allow functions to remember variables from their parent scope.

This allows:

* Data persistence
* Private variable storage
* Reusable logic

---

# 2. Counter Factory Using Closure

## Problem

Create a counter factory that can:

* Increment
* Decrement
* Reset

The counter value must be preserved using closure.

---

## Solution

```javascript
function factoryCounter(value) {
    let count = value;
    let initialValue = value;

    return {
        increment: function() {
            count++;
            return count;
        },

        decrement: function() {
            count--;
            return count;
        },

        reset: function() {
            count = initialValue;
            return count;
        }
    };
}

// Example usage
const counter = factoryCounter(10);

console.log(counter.increment()); // 11
console.log(counter.increment()); // 12
console.log(counter.decrement()); // 11
console.log(counter.reset());     // 10
```

---

## Explanation

### Private Variables

```javascript
let count = value;
let initialValue = value;
```

These variables are hidden from outside code.

---

### Shared Closure Memory

All returned methods share access to:

* `count`
* `initialValue`

Because of closure, these values remain in memory.

---

### Increment

Increases count by 1.

---

### Decrement

Decreases count by 1.

---

### Reset

Restores count to the original starting value.

---

# Closure Summary

A closure occurs when:

* A function remembers variables from its parent scope
* The parent function has already finished execution

---

## Benefits of Closures

* Encapsulation
* Data privacy
* State persistence
* Cleaner code organization

---

# Real World Analogy

Think of closure like a backpack.

A function carries its variables in the backpack even after leaving its original environment.

---

# Key Takeaways

* Functions can return other functions
* Inner functions can remember outer variables
* Closures help maintain state without global variables

---

# End of Documentation
