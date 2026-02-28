# 🚀 Day 21 – Modular Quiz Timer (40 Days of JavaScript)

## 📌 Project Overview

This project is part of the **40 Days of JavaScript Challenge**.

On Day 21, the focus is on improving code structure by separating concerns and building a **reusable countdown timer module** for a quiz application.

Instead of writing all logic inside one large function, the timer system is designed as a standalone, reusable function that communicates with the quiz logic using callbacks.

This improves:

- Code organization
- Reusability
- Maintainability
- Readability

---

## 🎯 What This Project Demonstrates

- Creating reusable functions
- Using `setInterval` and `clearInterval`
- Working with callback functions
- DOM manipulation
- Conditional styling
- Managing application state
- Separating logic into modular components

---

## 🧠 Core Concept – Separation of Concerns

In earlier versions of the quiz app, timer logic was written inside the `loadQuestion()` function.

On Day 21, the timer logic is moved into a reusable function:

```js
function startTimer(duration, onTimeUp) {

This function:

Accepts a time duration in seconds

Updates the UI every second

Stops automatically when time reaches zero

Executes a callback function when time finishes

The quiz logic simply calls the timer and decides what should happen when time runs out.

This pattern makes the timer reusable in:

Games

Forms

Exams

Countdown landing pages

Any time-based application

🛠️ How It Works
1️⃣ The Timer Module

The startTimer() function:

Sets the initial time

Displays it in the UI

Uses setInterval to decrease time every second

Changes color when 5 seconds remain

Calls a callback function when time reaches 0

Example usage:

startTimer(15, () => {
   selectAnswer(correctIndex, false);
});

This means:

Start a 15-second countdown

If time finishes, automatically select the correct answer

Do not increase the score

2️⃣ Quiz Flow

Each time a question loads:

Previous timer is cleared

A new timer starts

Options are rendered

User selects an answer or time runs out

Score updates only if the user selected correctly

3️⃣ Automatic Answer Reveal

If the timer reaches zero:

The correct answer is highlighted

All buttons become disabled

The "Next" button appears

This ensures smooth user experience without manual intervention.

🎨 Bonus Feature

When 5 seconds remain:

The timer color changes to red

This improves urgency and user engagement.

🏗️ Project Structure
quiz-app/
│
├── index.html
├── style.css
├── script.js
└── README.md
🔥 Key Learning Takeaways
1. Callback Functions

Instead of hardcoding behavior inside the timer, we pass a function as an argument.

This allows flexible behavior when time ends.

2. Modularity

Separating timer logic from quiz logic prevents:

Code duplication

Deep nesting

Confusing dependencies

3. State Management

Managing:

Current question index

Score

Timer state

High score in localStorage

Improves understanding of application flow.

🏆 Features

Randomized question order

15-second countdown timer

Auto-skip when time runs out

Score tracking

Persistent high score using localStorage

Restart functionality

Dynamic UI feedback

Clean modular architecture

🚀 Future Improvements

Add progress bar animation

Add pause on tab inactive

Add difficulty levels

Add category selection

Fetch questions from an external API

Add leaderboard system

Convert into a React component

📈 Why Day 21 Matters

This project marks a shift from beginner JavaScript to structured programming.

Instead of just making things work, the focus is now on:

Writing scalable code

Designing reusable functions

Thinking like a software engineer