console.log("welcome to day05");

let rows = 5;
let pattern = "";

for (let i = 1; i <= rows; i++) {
  for (let j = 1; j <= i; j++) {
    pattern += "* ";
  }
  pattern += "\n";
}

console.log(pattern);


let mut = 3

for (let i=1; i<=10; i++){
    let j = mut * i 
    console.log(`${mut} x ${i} = ${j}`)};

    
let ans = 0   

for (let a= 1; a<=500; a++){
        if(a % 2 === 1){
            ans = ans + a
        }
    }
console.log(ans);

for (let i=1; i<=20; i++){
    if(i % 3 === 0)continue;
    console.log(i)
};

let num = 6789;      
let reversed = 0;      

while (num > 0) {
  let digit = num % 10;         
  reversed = reversed * 10 + digit; 
  num = Math.floor(num / 10);    
}

console.log(reversed);


// 1. for loop

// Used when you know how many times to repeat.

// Has start, condition, and update in one line.

// Example: Print 1 to 5.

// 2. while loop

// Used when you don’t know exactly how many times, but have a condition.

// Checks the condition before running the loop.

// May not run at all if the condition is false.

// 3. do-while loop

// Similar to while loop, but runs at least once.

// Checks the condition after running the loop.

// Use when you want the loop to always run once, then repeat if needed.
