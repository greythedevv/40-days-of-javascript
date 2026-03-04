// 1. Create Your First Promise
// Create a Promise that resolves with the string "Hello, Promises!" after 1 second.
// Log the result using .then().


let ass = new Promise(function(resolve, reject){
let greet = "Hello, Promises!"

resolve(greet)
})

ass.then(function(greet){
    setTimeout(()=>{
        console.log(greet)
    }, 2000)
})

// 2. Reject a Promise
// Create a Promise that immediately rejects with the message "Something went wrong!".
// Handle the error using .catch().

let ass1 = new Promise(function(resolve, reject){
    reject("Something went wrong!")
})

ass1.catch(function(error){
    console.error(error)
})


// 3. Simulate Coin Toss
// Return a Promise that randomly resolves to "Heads" or "Tails" after 1 second.

let ass2 = new Promise(function(resolve, reject){
    setTimeout(() => {
        let toss = Math.random() < 0.5 ? "Heads" : "Tails";
        resolve(toss);
    }, 1000);
});

ass2.then(function(result){
    console.log(result);
});

// 4. Promise with Condition
// Create a function checkAge(age) that returns a Promise.
// Resolve if age >= 18, reject otherwise.
function checkAge(age){
    return new Promise(function(resolve, reject){
        if(age>=18){
            resolve(`${age} is greater than or equal to 18`)
        }else{
            reject(`${age} is not greater than 18`)
        }
    })
}
checkAge(18)
.then(function(result){
    console.log(result)
}).catch(function(error){
    console.error(error)
})

checkAge(15)
.then(function(result){
    console.log(result)
}).catch(function(error){
    console.error(error)
})

// 5. Chain Promises Sequentially
// Create three Promises that log:
// "Step 1 done"
// "Step 2 done"
// "Step 3 done"
// Chain them using .then().

let ass3 = new Promise(function(resolve, reject){
    console.log("Step 1 done")
    resolve()
})

let ass4 = new Promise (function(resolve, reject){
    console.log("Step 2 done")
    resolve();
})

let ass5 = new Promise (function(resolve, reject){
    console.log("Step 3 done")
    resolve();
})

ass3
.then(function(){
    ass4(function(){
        ass5
    })
})
.catch(function(error){
    console.error(error)
})

// 6. Value Transformation in Chain
// Create a Promise that resolves with 5.
// Chain .then() handlers to double it, then square it.
// Final output should be 100.

let ass6 = new Promise(function(resolve, reject){
    let value = 5
    resolve(5);
})

ass6
.then(function(value){
   return value*2
})
.then(function(value){
    return value*value
})
.then(function(value){
    console.log(value)
})


// 7. Chain with Random Rejection
// First .then() resolves to "Start".
// Second .then() randomly throws an error or returns "Continue".
// Handle rejection gracefully.

let ass7 = new Promise((resolve, reject) => {
    resolve("Start");
});

ass7
.then(result => {
    console.log(result);   // "Start"
    return "Continue";
})
.then(result => {
    // Randomly throw error
    if (Math.random() < 0.5) {
        throw new Error("Something went wrong!");
    }
    return result;
})
.then(result => {
    console.log(result);   // "Continue" (if no error)
})
.catch(error => {
    console.error("Error handled:", error.message);
});

// 8. Multiple then() calls on same Promise
// Create a single resolved Promise.
// Attach two different .then() handlers to it.
// Explain that both run independently.

let ass8 = new Promise (function(resolve, reject){
    resolve("hello there")
})

ass8.then(function(result){
    console.log(result)
    return "continue"
})
ass8.then(function(result){
    console.log(result)
})

// 9. Return New Promises in .then()
// Chain multiple .then() where each returns a new Promise with a delay and logs a step like:
// “First”
// “Second”
// “Third”

let ass9 = new Promise(function(resolve, reject){
    resolve("start");
});

ass9
.then(function(result){
    console.log(result);

    return new Promise(function(resolve){
        setTimeout(() => {
            console.log("First");
            resolve("Second Step");
        }, 3000);
    });
})
.then(function(result){
    return new Promise(function(resolve){
        setTimeout(() => {
            console.log("Second");
            resolve("Third Step");
        }, 4000);
    });
})
.then(function(result){
    return new Promise(function(resolve){
        setTimeout(() => {
            console.log("Third");
            resolve();
        }, 5000);
    });
});

// 10. Implement fakeDBQuery()
// Create a function that simulates a DB query with a random delay and returns data (like a user object).
// Chain multiple fake queries.

function fakeDBQuery(data) {
    return new Promise((resolve, reject) => {
        let delay = Math.floor(Math.random() * 3000) + 1000; 
        // random delay between 1–4 seconds

        setTimeout(() => {
            console.log(`Query finished in ${delay}ms`);
            resolve(data);
        }, delay);
    });
}

fakeDBQuery({ id: 1, name: "John" })
.then(user => {
    console.log("User:", user);
    
    return fakeDBQuery({ postId: 101, title: "My First Post" });
})
.then(post => {
    console.log("Post:", post);
    
    return fakeDBQuery({ commentId: 500, text: "Nice post!" });
})
.then(comment => {
    console.log("Comment:", comment);
})
.catch(error => {
    console.error("Something went wrong:", error);
});