🚀 Day 23 – JavaScript Promises Practice

This project is a deep dive into JavaScript Promises.
It covers everything from basic Promise creation to chaining, error handling, and working with real API data.

📚 What This Project Covers
1️⃣ Creating Your First Promise

Resolving a value after a delay

Using .then() to handle the result

2️⃣ Rejecting a Promise

Immediately rejecting a Promise

Handling errors using .catch()

3️⃣ Simulating a Coin Toss

Using Math.random()

Resolving randomly with "Heads" or "Tails"

4️⃣ Conditional Promises

Creating checkAge(age)

Resolving if age >= 18

Rejecting otherwise

5️⃣ Sequential Promise Chaining

Running steps in order:

"Step 1 done"

"Step 2 done"

"Step 3 done"

6️⃣ Value Transformation in Chains

Starting with 5

Doubling it

Squaring it

Final output: 100

7️⃣ Random Rejection in a Chain

Throwing errors conditionally

Handling errors gracefully with .catch()

8️⃣ Multiple .then() on Same Promise

Demonstrates independent handlers

Shows how Promises can have multiple listeners

9️⃣ Returning New Promises in .then()

Delayed sequential execution

Understanding why return is important in chaining

🔟 Simulating Database Queries

fakeDBQuery() function

Random delay (1–4 seconds)

Sequential chaining of fake queries:

User

Post

Comment

🔥 Advanced Practice Included
✔ Returning Simple Values in Chains

Understanding how returned values pass to the next .then().

✔ Throwing & Rethrowing Errors

Handling specific error codes like 401.

✔ Using .finally()

Running cleanup logic regardless of resolve/reject.

✔ Using Promise.all()

Fetching multiple Pokémon from the PokéAPI:

Bulbasaur

Raticate

Kakuna

All requests run in parallel and resolve together.

🌐 API Example Used

PokéAPI endpoints:

https://pokeapi.co/api/v2/pokemon/bulbasaur

https://pokeapi.co/api/v2/pokemon/raticate

https://pokeapi.co/api/v2/pokemon/kakuna

Demonstrates:

fetch()

Converting response to JSON

Using Promise.all()

🧠 Key Concepts Learned

Creating Promises

Resolving vs Rejecting

.then() chaining

Returning values in chains

Returning new Promises in chains

Error propagation

Error rethrowing

.catch()

.finally()

Promise.all()

Asynchronous flow control

📂 Project Structure
index.html
task.js
promise.js
day23.js

HTML files load scripts using defer

JavaScript files contain Promise exercises and API calls

💡 What I Learned

When to use return in .then()

How Promise chains wait for returned Promises

How errors travel down the chain

How to simulate real backend behavior

How parallel Promises work using Promise.all()

🏁 Conclusion

This project strengthened my understanding of asynchronous JavaScript and Promise behavior.

It moves from beginner-level Promise creation to intermediate-level chaining and error handling.