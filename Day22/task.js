// Pass a function to greet a user and then thank them

function greet(name, callback){
    console.log(`hello ${name} welcome!`)
    callback()
}
greet("great", function(){
    console.log(`thank you for visiting our website`)
})


// 2. Implement a calculator function that accepts two numbers and a callback to perform operations like add, subtract
function calculator(a, b, operationCallback) {
  // Complete this function
  return operationCallback(a,b)
}

function add(x, y) {
  return x + y;
}

console.log(calculator(5, 3, add))

// 3. Create a delayedMessage function that prints a message after a delay using setTimeout
function delayedMessage(message, delay, callback) {

console.log(message)
setTimeout(()=>{
    callback()
}, delay)
}

delayedMessage("Task complete", 2000, () => console.log("Callback Fired!"))


// 4. Implement a function that filters numbers in an array based on a condition provided via callback
function filterNumbers(arr, conditionCallback) {
  // Use loop and callback to return filtered array
  let filteredArr = []
 for(let n = 0; arr.length >n ; n++){
 if(conditionCallback(arr[n])){
    filteredArr.push(arr[n])
 }
}
return filteredArr
}

console.log(filterNumbers([1, 2, 3, 4], n => n > 2)) // should return [3, 4]


// 5. Execute a sequence of tasks one after another using callbacks
function task1(callback) {
  console.log("Task 1 done");
  callback();
}

function task2(callback) {
  console.log("Task 2 done");
  callback();
}

function task3() {
  console.log("Task 3 done");
}

// Call them in sequence using nested callbacks

task1(function(){
    task2(function(){
        task3()
    })
})