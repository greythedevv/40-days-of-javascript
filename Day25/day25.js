// 1. Use fetch() to retrieve a list of users from https://jsonplaceholder.typicode.com/users and log the 
// names to the console

// const { json } = require("express");

// const { json } = require("express");

// async function ass(){
//     try{
//     let responce = await fetch ("https://jsonplaceholder.typicode.com/users")
//     if(!responce.ok) throw new Error("server error")
//     let data = await responce.json()
//     data.forEach(data => {
//             console.log(data.name)
//     });

//     } catch(error){
//         console.error(error.message)
//     }  
// }
// ass()

// // 2. Fetch all posts by userId=1 from https://jsonplaceholder.typicode.com/posts?userId=1 and
// //  display the titles in the DOM

// let ass2 = document.getElementById("showid");

// async function ass3() {
//     let response = await fetch("https://jsonplaceholder.typicode.com/posts?userId=1");
//     let data = await response.json();

//     data.forEach(post => {
//         let p = document.createElement("p"); // create paragraph
//         p.textContent = post.title; // add title
//         ass2.appendChild(p); // add to DOM
//     });
// }

// ass3();

// // 3. Send a POST request to https://jsonplaceholder.typicode.com/posts with a new post
// //  (title, body, userId). Show the response in console

// async function ass4(postdata){
//     try{
//         let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//             method: "POST",
//             headers: {"Content-Type": "application/json"},
//             body: JSON.stringify(postdata)
//         })
//         if (!response.ok) throw new Error("Server Error")
//         let data = await response.json()
//         console.log(data)
        
//     } catch (error){
//         console.error(error.message)
//     }
    
// }

// let newPostData = {
//      "userId": 1,
//     "id": 1,
//     "title": "How i hate javascript",
//     "body": "this is a naration of how i hate javascript"
// }

// let ass5 = ass4(newPostData)
// console.log(ass5)

// // 4. Update the post with ID = 1 by sending a PUT request with a new title and body. Use the same 
// // endpoint

// async function ass4(postdata){
//     try{
//         let response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
//             method: "PUT",
//             headers: {"Content-Type": "application/json"},
//             body: JSON.stringify(postdata)
//         })
//         if (!response.ok) throw new Error("Server Error")
//         let data = await response.json()
//         console.log(data)
        
//     } catch (error){
//         console.error(error.message)
//     }
    
// }

// let updatedPostData = {
//      "userId": 1,
//     "id": 2,
//     "title": "love How i hate javascript",
//     "body": "this is a naration of how i hate javascript"
// }

// let ass6 = ass4(updatedPostData)
// console.log(ass6)


// // 5. Send a PATCH request to update just the title of post ID = 1

// async function ass4(postdata){
//     try{
//         let response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
//             method: "PATCH",
//             headers: {"Content-Type": "application/json"},
//             body: JSON.stringify(postdata)
//         })
//         if (!response.ok) throw new Error("Server Error")
//         let data = await response.json()
//         console.log(data)
        
//     } catch (error){
//         console.error(error.message)
//     }
    
// }

// let updatedPostData1 = {
//      "userId": 1,
//     "id": 2,
//     "title": "How i LOVE javascript",
//     "body": "this is a naration of how i hate javascript"
// }

// let ass7 = ass4(updatedPostData1)
// console.log(ass7)

// // 6. Send a DELETE request to remove post with ID = 1. Log the status of the response


// async function ass4(){
//     try{
//         let response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
//             method: "DELETE",
//         })
//         if (!response.ok) throw new Error("Server Error")
//         let data = await response.json()
//         console.log(data)
        
//     } catch (error){
//         console.error(error.message)
//     }
    
// }


// ass4()

// 7. Send a POST request to https://jsonplaceholder.typicode.com/posts 
// with Content-Type: application/json in headers. Log the response

async function ass8 (realdata){
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(realdata)
    })
    if(!response.ok) throw new Error("server error")
    let data =await response.json()
    console.log(data)
    } catch (error){
        console.error(error.message)
    }
}

let newrealdata = {
     "userId": 10,
    "id": 101,
    "title": "do you love javascript",
    "body": "this is a naration of how i love javascript"
} 

let ass9 = ass8(newrealdata)
console.log(ass9)

// 8. Create a custom function request(url, options) that wraps fetch. 
// Use it to GET users and POST a new post

async function request(url, options = {}) {
    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Request failed:", error.message);
    }
}

async function getUsers() {
    const users = await request("https://jsonplaceholder.typicode.com/users");
    console.log(users);
}

getUsers();

async function createPost() {

    const newPost = {
        userId: 1,
        title: "Learning JavaScript",
        body: "Fetch API is actually getting easier"
    };

    const post = await request(
        "https://jsonplaceholder.typicode.com/posts",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost)
        }
    );

    console.log(post);
}

createPost();

// 9. Make a fetch call to a broken URL and use .catch() or try...catch 
// to show a user-friendly error message

async function ass11 (){ 
    try{
          let responce = fetch("https://jsonplaceholdertypicode.com/posts")
    if(!responce.ok) throw new Error (`HTTP Error: ${response.status}`)
        let data = responce.json()
        console.log(data)
    } catch (error){
        console.error(error.message)
    }
  
}
ass11()

// 10. Use AbortController to cancel a long-running fetch request 
// (you can delay the response using a mock server or setTimeout)

// 1. Create an AbortController instance
const controller = new AbortController();
const signal = controller.signal;

async function fetchWithAbort() {
    try {
        // 2. Start the fetch with the signal
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", { signal });

        const data = await response.json();
        console.log("Fetch completed:", data);

    } catch (error) {
        if (error.name === "AbortError") {
            console.log("Fetch aborted!");
        } else {
            console.error("Fetch failed:", error.message);
        }
    }
}

fetchWithAbort();

// 3. Cancel the fetch after 100ms
setTimeout(() => {
    controller.abort(); // abort the request
}, 100);