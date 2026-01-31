📚 Day 05 – JavaScript Loops and Patterns
Overview

Today’s exercises focused on loops, nested loops, and basic algorithms in JavaScript. The tasks included pattern generation, multiplication tables, sum calculations, skipping numbers, reversing numbers, and understanding loop types (for, while, do-while).

Tasks Completed
1. Pyramid Pattern

Printed a right-angled pyramid of stars using nested loops:

*
* *
* * *
* * * *
* * * * *


Outer loop controls rows, inner loop prints stars per row.

2. Multiplication Table

Printed multiplication table of 3 using a for loop and template literals:

let mut = 3;
for (let i = 1; i <= 10; i++) {
  let j = mut * i;
  console.log(`${mut} x ${i} = ${j}`);
}

3. Sum of Odd Numbers (1–500)

Calculated sum of odd numbers:

let ans = 0;
for (let a = 1; a <= 500; a++) {
  if (a % 2 === 1) {
    ans += a;
  }
}
console.log(ans); // 62500


Learned why we must update the same variable for accumulation.

4. Skipping Multiples of 3

Printed numbers 1–20, skipping multiples of 3 using continue:

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) continue;
  console.log(i);
}

5. Reverse a Number

Reversed a number using a while loop:

let num = 6789;
let reversed = 0;

while (num > 0) {
  let digit = num % 10;
  reversed = reversed * 10 + digit;
  num = Math.floor(num / 10);
}

console.log(reversed); // 9876

6. Loop Differences

for loop: Use when you know how many times to repeat. Condition checked before iteration.

while loop: Use when iterations depend on a condition. May not run at all if false.

do-while loop: Runs at least once, checks condition after execution.

✅ Key Takeaways

Loops are essential for repetition, pattern generation, and calculations.

Nested loops simplify complex patterns like pyramids.

Template literals make formatted output readable.

continue can skip unwanted iterations.

While loops are useful for dynamic conditions, and do-while ensures minimum one execution.

Conclusion

Completed all tasks for Day 05 successfully. My understanding of loops, nested loops, conditionals, and basic number manipulations in JavaScript has improved.