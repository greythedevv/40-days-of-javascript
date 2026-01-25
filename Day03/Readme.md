Day 3 JavaScript Practice 🚀

Welcome to Day 3 of my JavaScript learning journey.
This repository contains beginner friendly practice problems focused on logic building, conditions, and operators using JavaScript.

This is part of my 40 Days of JavaScript consistency challenge.

📚 Topics Covered

Variables and data types

Conditional statements

Arithmetic operators

Comparison operators

Ternary operator

Bitwise operator

📂 Folder Structure
day3-javascript/
│
├── odd-even.js
├── driving-license.js
├── ctc-calculation.js
├── traffic-light.js
├── electricity-bill.js
├── leap-year.js
├── max-of-three.js
└── bitwise-doubling.js


Each file contains one problem and its solution.

🧠 Practice Problems and Code Samples
1. Odd or Even Checker

Checks whether a number is odd or even.

let num = 10;

if (num % 2 === 0) {
  console.log(num + " is an even number");
} else {
  console.log(num + " is an odd number");
}

2. Driving License Eligibility

Checks if a person is eligible for a driving license.

let age = 20;

if (age >= 18) {
  console.log("Eligible for a driving license");
} else {
  console.log("Not eligible for a driving license");
}

3. CTC Calculation with Bonus

Calculates annual CTC including a 20 percent bonus.

let monthlySalary = 12300;
let annualSalary = monthlySalary * 12;
let bonus = annualSalary * 0.20;

console.log("Annual CTC:", annualSalary + bonus);

4. Traffic Light Simulation

Simulates traffic light behavior.

let color = "Red";

if (color === "Red") {
  console.log("STOP");
} else if (color === "Green") {
  console.log("GO");
}

5. Electricity Bill Calculator

Calculates monthly and annual electricity bills.

let unitsPerDay = 5;
let costPerUnit = 150;

let monthlyBill = unitsPerDay * 30 * costPerUnit;
let annualBill = monthlyBill * 12;
let discountedAnnualBill = annualBill * 0.80;

console.log("Monthly Bill:", monthlyBill);
console.log("Annual Bill after discount:", discountedAnnualBill);

6. Leap Year Checker

Checks if a year is a leap year using a ternary operator.

let year = 2025;

let result =
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    ? "Leap Year"
    : "Not a Leap Year";

console.log(result);

7. Maximum of Three Numbers

Finds the maximum of three numbers.

let p = 10;
let q = 25;
let r = 15;

let max = p > q && p > r ? p : q > r ? q : r;
console.log("Maximum number is:", max);

8. Bitwise Doubling

Doubles a number using the bitwise shift operator.

let count = 5;
console.log(count << 1);

🛠️ Tech Stack

JavaScript
VS Code
Browser Console

✅ Progress

Day 3 completed successfully
Staying consistent and improving daily 💪