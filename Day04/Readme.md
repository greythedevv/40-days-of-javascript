# 40 Days of JavaScript – Tasks (Switch, Conditions & Logic)

This README documents my solutions for the **tapaScript – 40 Days of JavaScript** tasks.
The focus of these tasks is **logic building**, **conditions**, and **switch-case statements**.
All outputs are printed in the **browser console**, no UI involved.

---

## Task 1: Switch Case Output

**Question:** What will be the output of the following code and why?

```js
let day = "Monday";

switch (day) {
  case "monday":
    console.log("It's the start of the week.");
    break;
  default:
    console.log("It's a normal day.");
}
```

**Output:**

```
It's a normal day.
```

**Reason:**
JavaScript `switch` statements are **case-sensitive**.
`"Monday"` does not match `"monday"`, so the `default` case runs.

---

## Task 2: ATM Cash Withdrawal System

The ATM only allows withdrawals in **multiples of 100**.

```js
let atm = 100;

if (atm % 100 === 0) {
  console.log("Withdrawal successful");
} else {
  console.log("Invalid amount");
}
```

---

## Task 3: Calculator Using Switch Case

A simple calculator that performs operations based on the operator provided.

```js
let num1 = 1;
let num2 = 2;
let oprator = "+";

switch (oprator) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    console.log(num1 / num2);
    break;
  case "%":
    console.log(num1 % num2);
    break;
  default:
    console.log("invalid operator");
}
```

---

## Task 4: Movie Ticket Pricing Based on Age

Ticket prices:

* Children (< 18): $3
* Adults (18–60): $10
* Seniors (60+): $8

```js
let ag = 65;

if (ag < 18) {
  console.log("ticket price:", "$3");
} else if (ag > 60) {
  console.log("ticket price:", "$8");
} else {
  console.log("ticket price:", "$10");
}
```

---

## Task 5: Horoscope Sign Checker (Month-Based)

Zodiac signs determined **by birth month**, using `switch-case` only.

```js
let month = "March";

switch (month) {
  case "April":
    console.log("Aries");
    break;
  case "May":
    console.log("Taurus");
    break;
  case "June":
    console.log("Gemini");
    break;
  case "july":
    console.log("Cancer");
    break;
  case "August":
    console.log("Leo");
    break;
  case "september":
    console.log("Virgo");
    break;
  case "October":
    console.log("Libra");
    break;
  case "November":
    console.log("Scorpio");
    break;
  case "December":
    console.log("Sagittarius");
    break;
  case "january":
    console.log("Capricorn");
    break;
  case "febuary":
    console.log("Aquarius");
    break;
  case "March":
    console.log("Pisces");
    break;
  default:
    console.log("unknown month");
}
```

---

## Task 6: Triangle Type Checker

Triangle types based on side equality:

* All sides equal → Equilateral
* Two sides equal → Isosceles
* All sides different → Scalene

```js
let triangle = "All sides different";

switch (triangle) {
  case "All sides equal":
    console.log("Equilateral Triangle");
    break;
  case "Two sides equal":
    console.log("Isosceles Triangle");
    break;
  case "All sides different":
    console.log("Scalene Triangle");
    break;
  default:
    console.log("unknown Triangle");
}
```

---

### ✅ Key Learnings

* `switch` statements are **case-sensitive**
* Condition order matters in `if-else`
* `%` operator helps validate multiples
* Clean logic is more important than UI at this stage

---

**#40DaysOfJavaScript #tapaScript #LearningByDoing**
