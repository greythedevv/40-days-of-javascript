// Odd or Even
let num = 10;

if (num % 2 === 0) {
  console.log(num + " is an even number");
} else {
  console.log(num + " is an odd number");
}

// Do you have a Driving License?
let age = 20;

if (age >= 18) {
  console.log("Eligible for a driving license");
} else {
  console.log("Not eligible for a driving license");
}

// Calculate CTC with a Bonus
let monthlySalary = 12300;
let annualSalary = monthlySalary * 12;
let bonus = annualSalary * 0.20;
let ctc = annualSalary + bonus;

console.log("Annual CTC is:", ctc, "rupees");

// Traffic Light Simulation
let color = "Red";

if (color === "Red") {
  console.log("STOP");
} else if (color === "Green") {
  console.log("GO");
} else {
  console.log("Invalid signal");
}

// Electricity Bill Calculator
let unitsPerDay = 5;
let costPerUnit = 150;

let monthlyBill = unitsPerDay * 30 * costPerUnit;
let annualBill = monthlyBill * 12;
let discountedAnnualBill = annualBill - (annualBill * 0.20);

console.log("Monthly bill:", monthlyBill, "rupees");
console.log("Annual bill after discount:", discountedAnnualBill, "rupees");

// Leap Year Checker
let year = 2025;

let result = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
  ? "Leap Year"
  : "Not a Leap Year";

console.log(year + " is " + result);

// Maximum of Three Numbers
let p = 10;
let q = 25;
let r = 15;

let max;

if (p >= q && p >= r) {
  max = p;
} else if (q >= p && q >= r) {
  max = q;
} else {
  max = r;
}

console.log("Maximum number is:", max);

let count = 5;
let doubled = count << 1;

console.log("Doubled value:", doubled);
