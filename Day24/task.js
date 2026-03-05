// 1. Create a function wait(ms) that returns a promise which resolves after ms milliseconds. 
// Use async/await to log messages before and after the delay

function wait(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(); // tell the Promise we're done
    }, ms);
  });
}

async function run() {
  console.log("Before wait");
  
  await wait(2000); // waits 2 seconds

  console.log("After wait");
}

run();


// 2. Using async/await, log "One", then after 1 second log "Two", then "Three" after another 2 seconds.
//  No setTimeout outside of promises

async function show(ms){
  return new Promise (function(resolve, reject){
    setTimeout(()=>{
      resolve()
    },ms)
  })
}

async function work(){
  console.log("one")

  await show(1000)

  console.log("two")

  await show (2000)

  console.log("three")
}
work()

// 3. Use fetch() with async/await to load a local JSON file (data.json) and display its contents
// in the console

async function grey(){
    let responce = await fetch('./data.json')
     let result = await responce.json()
     let data =  console.log(result)
}
  
async function show1(){
   await grey()
}
show1()

// 4. Use the public API https://jsonplaceholder.typicode.com/users/1 to fetch and display the user’s 
// name,
// email, and address on the page

async function getUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const user = await response.json();

    document.getElementById("user").innerHTML = `
      <h2>${user.name}</h2>
      <p>Email: ${user.email}</p>
      <p>Address: ${user.address.street}, ${user.address.city}</p>
    `;
  } catch (error) {
    console.log("Something went wrong:", error);
  }
}

getUser();


// 5. Modify the previous task to handle errors (e.g., wrong URL) and display a user-friendly error
//  message in the DOM

// 6. Refactor then/catch to async/await
// fetch('/api/data')
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(err => console.error(err));

async function ass1(){
  try{
  let res = await fetch('/api/data')
  let data = await res.json()
        console.log(data)
  } catch (error){
    console.error("there is an error", error)
  }

}
ass1()

