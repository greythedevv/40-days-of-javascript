# JavaScript Execution Context, Call Stack, Stack Memory, and Heap Memory

## 📌 Overview

This document explains how JavaScript executes code using:

* Global Execution Context (GEC)
* Function Execution Context (FEC)
* Creation Phase (CP)
* Execution Phase (EP)
* Call Stack Flow
* Stack Memory
* Heap Memory
* Return Value Flow

---

## 🧠 Sample Code Used

```javascript
const message = "I can do it";

function sum(a, b) {
    const result = a + b;
    return result;
}

function mul(a, b) {
    const result = a * b;
    return result;
}

function calc(a, b) {
    return (sum(a, b) + mul(a, b)) / 2;
}

function getResult(a, b) {
    return calc(a, b);
}

getResult(8, 5);
```

---

# 🌍 Global Execution Context (GEC)

## ✅ Creation Phase (CP)

During this phase JavaScript allocates memory.

```
message → undefined
sum → function stored
mul → function stored
calc → function stored
getResult → function stored
```

---

## ✅ Execution Phase (EP)

```
message = "I can do it"
```

JavaScript then reaches:

```
getResult(8, 5)
```

A new Function Execution Context is created.

---

# 🔥 Function Execution Context Flow

---

## STEP 1: getResult Execution Context

### Creation Phase

```
a → 8
b → 5
```

### Execution Phase

```
return calc(a, b)
```

---

## STEP 2: calc Execution Context

### Creation Phase

```
a → 8
b → 5
```

### Execution Phase

```
return (sum(a, b) + mul(a, b)) / 2
```

---

## STEP 3: sum Execution Context

### Creation Phase

```
a → 8
b → 5
result → undefined
```

### Execution Phase

```
result = 13
return 13
```

---

## STEP 4: mul Execution Context

### Creation Phase

```
a → 8
b → 5
result → undefined
```

### Execution Phase

```
result = 40
return 40
```

---

## STEP 5: calc Completes

```
(13 + 40) / 2 = 26.5
return 26.5
```

---

## STEP 6: getResult Completes

```
return 26.5
```

---

# 📚 Call Stack Diagram

## Step 1

```
┌───────────────┐
│      GEC      │
└───────────────┘
```

---

## Step 2

```
┌───────────────┐
│   getResult   │
├───────────────┤
│      GEC      │
└───────────────┘
```

---

## Step 3

```
┌───────────────┐
│     calc      │
├───────────────┤
│   getResult   │
├───────────────┤
│      GEC      │
└───────────────┘
```

---

## Step 4

```
┌───────────────┐
│      sum      │
├───────────────┤
│     calc      │
├───────────────┤
│   getResult   │
├───────────────┤
│      GEC      │
└───────────────┘
```

---

## Step 5 (sum removed)

```
┌───────────────┐
│     calc      │
├───────────────┤
│   getResult   │
├───────────────┤
│      GEC      │
└───────────────┘
```

---

## Step 6

```
┌───────────────┐
│      mul      │
├───────────────┤
│     calc      │
├───────────────┤
│   getResult   │
├───────────────┤
│      GEC      │
└───────────────┘
```

---

## Step 7 (mul removed)

```
┌───────────────┐
│     calc      │
├───────────────┤
│   getResult   │
├───────────────┤
│      GEC      │
└───────────────┘
```

---

## Step 8 (calc removed)

```
┌───────────────┐
│   getResult   │
├───────────────┤
│      GEC      │
└───────────────┘
```

---

## Step 9 (getResult removed)

```
┌───────────────┐
│      GEC      │
└───────────────┘
```

---

# 📦 Stack Memory

Stack stores:

* Execution contexts
* Function parameters
* Primitive values

Example:

```
a = 8
b = 5
result = 13
result = 40
26.5
```

---

# 🗄 Heap Memory

Heap stores:

* Functions
* Objects
* Complex data types

```
sum → function
mul → function
calc → function
getResult → function
```

Stack stores references to these functions.

---

# 🔁 Return Value Flow

```
sum → 13
mul → 40
calc → 26.5
getResult → 26.5
```

---

# 🎯 Complete Call Stack Timeline

```
GEC
 ↓
getResult
 ↓
calc
 ↓
sum
 ↑ removed
mul
 ↑ removed
calc
 ↑ removed
getResult
 ↑ removed
GEC
```

---

# ⭐ Key Rules

1. JavaScript runs code from top to bottom
2. Inner functions execute before outer functions
3. Call stack follows Last In First Out (LIFO)
4. Return sends values back up the call stack
5. Stack stores execution contexts and primitive data
6. Heap stores functions and objects

---

# ✅ Final Output

```
26.5
```

---

# 📚 Learning Outcome

After studying this flow, you should understand:

* Execution context lifecycle
* Call stack behavior
* Memory management in JavaScript
* Function invocation flow
* Return value propagation

---

🚀 End of Documentation
