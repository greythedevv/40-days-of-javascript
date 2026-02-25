📌 JavaScript DOM Manipulation Projects – Day 18
📖 Overview

This repository contains hands-on projects focused on dynamic DOM manipulation using vanilla JavaScript.

The projects demonstrate real-world techniques such as:

Creating dynamic forms and inputs

Managing dynamic tables with add, delete, and search functionality

Building a persistent theme switcher

Creating a fully interactive TODO app with edit, complete, delete, and filter features

These exercises are designed to strengthen understanding of the DOM API, event handling, and localStorage persistence.

🚀 Projects
1️⃣ Dynamic Form

Features:

Form created entirely with JavaScript

Includes:

Name (text)

Email (email)

Number (number)

Submit and reset buttons

On submit:

Prevents page reload

Logs form data as an object in the console

Example:

{
  name: "John Doe",
  email: "john@example.com",
  number: "1234567890"
}

Key concepts practiced: createElement, appendChild, setAttribute, addEventListener, event.preventDefault()

2️⃣ Dynamic Table

Features:

Table created dynamically with headers: Name, Age, Role

Users can:

Add new rows

Delete specific rows

Filter rows by Name in real time

Delete button appears in each row

Search input dynamically hides non-matching rows

Key concepts practiced: insertRow, insertCell, deleteRow, textContent, querySelectorAll, live filtering

3️⃣ Theme Switcher

Features:

Toggle button switches between light and dark mode

Uses classList.toggle to change styles

Theme is persisted in localStorage

Theme is applied automatically on page load

Dark Mode CSS Example:

body.toggle1 {
  background-color: black;
  color: white;
}

Key concepts practiced: localStorage, classList, DOM manipulation, event handling

4️⃣ TODO App

Features:

Add tasks dynamically

Mark tasks as complete (strikethrough)

Edit tasks inline

Delete tasks

Search/filter tasks in real-time

Minimal CSS for clarity and readability

Key concepts practiced: createElement, appendChild, replaceChild, DOM traversal, inline editing, real-time filtering

🛠️ Technologies Used

HTML5

CSS3

Vanilla JavaScript

DOM API

LocalStorage API

📂 Project Structure
project-folder/
│
├── index.html       # Main HTML file
├── style.css        # CSS for styling
├── day18.js         # Dynamic form, table, theme JS
├── task.js          # TODO app JS
└── README.md        # This file
🧠 Concepts Practiced

Creating and appending DOM elements dynamically

Event handling with addEventListener

Preventing default form behavior

Dynamic table row management

Live search and filtering

Inline editing of DOM elements

Theme persistence using localStorage

Basic form validation

🎯 Learning Outcome

By completing these projects, I gained:

Practical understanding of dynamic DOM manipulation

Ability to create interactive user interfaces without prewritten HTML

Experience implementing live search, inline editing, and persistent themes

Confidence in building small real-world JavaScript applications

📌 Future Improvements

Improve UI styling with modern design

Add modularity and reusable functions

Implement drag-and-drop for tasks or table rows

Add sorting to table columns

Add task priority or due dates in TODO app