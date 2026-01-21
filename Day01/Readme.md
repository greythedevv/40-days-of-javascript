# Day 01 - Task Completion ✅

## 🎉 I Have Completed Day 01 of 40 Days of JavaScript!

### ✅ Task 1: Setting Up Your Environment
- **Installed VS Code** ✓
- **Set up Live Server** for running HTML files ✓
- **Opened DevTools Console** (Right-click → Inspect → Console) ✓

### ✅ Task 2: First JavaScript Code
Created my first JavaScript program with the following structure:

**File Structure:**
```
day-01/
├── first.html
├── day1.js
└── node-script.js
```

**Code Implementation:**

**index.html:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script defer src="day1.js"></script>
</head>
<body>
    <main>
        <h1>Welcome to 40 Days of JavaScript!</h1>
        <div id="someid">
            Loading JavaScript...
        </div>
    </main>
</body>
</html>
```


**node-test.js:**
```javascript
console.log("I am a test script");
console.log("This runs in the terminal, not the browser.");
```

**Results:**
- ✓ Console logs print successfully in browser DevTools
- ✓ DOM manipulation updates the greeting div text
- ✓ Node.js script runs in terminal

### ✅ Task 3: JavaScript Loading Methods Experimented

I tested different ways to load JavaScript and understood their behavior:

#### 1. **Script in `<head>` (No attributes)**
```html
<head>
    <script src="script.js"></script>
</head>
```
- ❌ **Problem**: Script runs before DOM elements load
- ❌ **Result**: `document.getElementById("someid")` returns `null`
- **Execution**: Blocks HTML parsing until script downloads and executes

#### 2. **Script at end of `<body>`**
```html
<body>
    <main>
        <h1>Welcome to 40 Days of JavaScript!</h1>
        <div id="someid">Loading JavaScript...</div>
    </main>
    <script src="day1.js"></script>
</body>
```
- ✓ **Works**: DOM loads first, then script executes
- ✓ **Result**: Successfully updates the greeting div
- **Execution**: HTML fully parsed before script runs

#### 3. **Using `async` attribute**
```html
<head>
    <script async src="day1.js"></script>
</head>
```
- ⚠️ **Unpredictable**: Script executes as soon as it downloads
- ⚠️ **Issue**: May run before or after DOM is ready
- **Use Case**: Independent scripts (analytics, ads) that don't need DOM

#### 4. **Using `defer` attribute** ✅ **BEST PRACTICE**
```html
<head>
    <script defer src="day1.js"></script>
</head>
```
- ✓ **Perfect**: Downloads in parallel, executes after HTML parsing
- ✓ **Result**: DOM is ready when script runs
- ✓ **Order**: Multiple defer scripts execute in order
- **Use Case**: Scripts that interact with DOM

### 📊 Loading Methods Comparison Table

| Method | Download | Execute | DOM Ready? | Multiple Scripts Order |
|--------|----------|---------|------------|------------------------|
| `<head>` no attribute | Blocks parsing | Immediately | ❌ No | In order |
| End of `<body>` | After HTML | Immediately | ✓ Yes | In order |
| `async` | Parallel | ASAP | ⚠️ Maybe | ❌ No guarantee |
| `defer` | Parallel | After parsing | ✓ Yes | ✓ In order |

### ✅ Task 4: Key Learnings & Notes

**What I Learned Today:**

1. **JavaScript Basics**
   - JavaScript can run in both browser and Node.js environments
   - Browser JavaScript can manipulate the DOM
   - Node.js JavaScript runs in the terminal

2. **Development Environment**
   - VS Code is a powerful code editor for JavaScript
   - Live Server extension helps preview HTML files instantly
   - DevTools Console is essential for debugging

3. **Script Loading Best Practices**
   - Always use `defer` for scripts that need DOM access
   - Use `async` only for independent third-party scripts
   - Place scripts in `<head>` with `defer` for better performance

4. **DOM Manipulation**
   - `document.getElementById()` selects HTML elements
   - `.innerText` updates text content of elements
   - Must wait for DOM to load before manipulating it

5. **Console Methods**
   - `console.log()` prints messages to browser console
   - Useful for debugging and checking if code runs

**Challenges Faced:**
- Initially placed script in `<head>` without `defer` - got `null` error
- Learned that timing matters when accessing DOM elements
- Solved by understanding script loading attributes

**Next Steps:**
- Continue with Day 02
- Practice more DOM manipulation
- Explore JavaScript variables and data types

---

## 📸 Project Output
**Browser Page Display:**
```
Welcome to javascript
i am some div
```

**Node.js Terminal Output:**
```bash
$ node node-test.js
Hello from Node.js!
This runs in the terminal, not the browser.
```

---

## 🚀 How to Run This Project

### Browser Version:
1. Open `index.html` in any web browser
2. Open DevTools (F12 or Right-click → Inspect)
3. Check Console tab for messages
4. See the updated greeting text on the page

### Node.js Version:
```bash
node node-test.js
```

---

## 🔗 Resources Used
- [tapaScript YouTube Channel](https://youtube.com/tapasadhikary)
- VS Code with Live Server extension
- Google Chrome DevTools
- Node.js runtime

---

## 🙏 Thank You, tapaScript!

Excited to continue this 40-day journey and master JavaScript! 🚀

Day 01 Complete! Moving on to Day 02 tomorrow! 💪

**#40DaysOfJavaScript #Day01Complete #JavaScriptLearning #tapaScript**

---

**📦 Repository:** [https://github.com/greythedevv/40-days-of-javascript.git](https://github.com/greythedevv/40-days-of-javascript.git)