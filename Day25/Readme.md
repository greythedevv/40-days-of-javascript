25 Days of 40 Days of JavaScript: Fetch API Exercises

Welcome to Day 25 of the 40 Days of JavaScript challenge! 🎉
Today’s focus is on working with APIs using the Fetch API. You’ll learn how to make GET, POST, PUT, PATCH, and DELETE requests, handle errors, and even cancel requests with AbortController.

Table of Contents

Overview

Features

Setup

Exercises

Error Handling

AbortController

License

Overview

APIs allow your JavaScript apps to communicate with servers and fetch data dynamically. Today, we use JSONPlaceholder, a free mock API, to practice real-world scenarios:

Fetching data (GET)

Sending new data (POST)

Updating data completely (PUT) or partially (PATCH)

Deleting data (DELETE)

Handling errors gracefully

Aborting long-running requests

Features

Fetch Users – Get a list of users and log their names.

Fetch Posts by User – Show all post titles for userId=1 in the DOM.

POST a New Post – Send data to the API and log the response.

PUT Request – Update an existing post completely.

PATCH Request – Update only certain fields of a post.

DELETE Request – Remove a post and check the status.

Custom Request Function – A reusable wrapper around fetch.

Error Handling – Catch network or server errors.

AbortController – Cancel slow or unwanted requests.

Setup

Clone or download the project.

Ensure your HTML has an element for displaying posts:

<div id="showid"></div>
<script src="script.js"></script>

Open in a modern browser (Chrome, Firefox, Edge).

Exercises
1. Fetch Users
async function getUsers() {
    const users = await fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json());
    users.forEach(user => console.log(user.name));
}
getUsers();
2. Fetch Posts by User
const showDiv = document.getElementById("showid");
async function getPosts() {
    const posts = await fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
        .then(res => res.json());
    posts.forEach(post => {
        const p = document.createElement("p");
        p.textContent = post.title;
        showDiv.appendChild(p);
    });
}
getPosts();
3. POST a New Post
async function createPost() {
    const newPost = {
        userId: 1,
        title: "Learning JavaScript",
        body: "Fetch API is actually getting easier"
    };
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPost)
    });
    const data = await res.json();
    console.log(data);
}
createPost();
4. PUT / PATCH / DELETE

PUT: Update a post completely.

PATCH: Update only specific fields.

DELETE: Remove a post.

All follow the same fetch structure with method and body.

Error Handling
try {
    const res = await fetch("https://jsonplaceholder.typicode.com/brokenurl");
    if(!res.ok) throw new Error(`HTTP Error: ${res.status}`);
    const data = await res.json();
} catch (error) {
    console.error("Request failed:", error.message);
}
AbortController
const controller = new AbortController();
const signal = controller.signal;

fetch("https://jsonplaceholder.typicode.com/posts", { signal })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => {
        if(err.name === "AbortError") console.log("Fetch aborted!");
    });

// Abort after 100ms
setTimeout(() => controller.abort(), 100);
License

MIT License – Free to use and share.