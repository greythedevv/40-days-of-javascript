Day 33 of 40 Days of JavaScript

This project demonstrates practical exercises using Map, Set, WeakMap, WeakSet, and other JavaScript features. It focuses on key-value storage, uniqueness, metadata tracking, and performance optimization.

Table of Contents

Student Map

Programming Languages Set

Object vs Map Comparison

Contact List Using Map

Remove Duplicates from Array

User Login Tracker

Book Map

DOM Metadata with WeakMap

Class Instance Tracker with WeakSet

Shopping Cart with Map

Anagram Checker with Set

First Non-Repeating Character with Map

Performance: Object vs Map

Voting App with Set

Employee Registry with Object Keys in Map

1. Student Map

Objective: Store student IDs and names.

Operations: Add, retrieve, delete, and print entries.

let map = new Map();
map.set(1, "greatness");
map.set(2, "adeola");
map.set(3, "olushola");
map.set(4, "daramola");
map.set(5, "shina");

console.log(map.get(3)); // Retrieve
map.delete(5);
console.log(map);
2. Programming Languages Set

Objective: Store unique languages.

Demonstrates: Automatic removal of duplicates.

let set = new Set(["JavaScript", "Python", "React", "Next", "Vue"]);
set.add("JavaScript"); // duplicate ignored
console.log([...set]);
3. Object vs Map Comparison

Key Differences:

Map preserves insertion order.

Map allows objects as keys.

Objects only allow string/symbol keys.

let studentObj = {1:"Greatness", 2:"Adeola", 3:"Olushola"};
let studentMap = new Map([[1,"Greatness"], [2,"Adeola"], [3,"Olushola"]]);
4. Contact List Using Map

Store: Phone numbers → names

Operations: Add, update, delete, search

let contactList = new Map([
  ["08032215882", "greatness"],
  ["08332215882", "great"],
]);

contactList.set("07043367967", "biyi");
contactList.delete("08032215882");
console.log(contactList);
5. Remove Duplicates from Array
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana'];
let uniqueFruits = [...new Set(fruits)];
console.log(uniqueFruits);
6. User Login Tracker
let login = new Set();
login.add(1);
login.add(2);
login.delete(1);

console.log(login.has(1)); // false
console.log(login.has(2)); // true
console.log(login);
7. Book Map

Track books and authors

Update existing entries

Count total books

let bookMap = new Map();
bookMap.set("1984", "George Orwell");
bookMap.set("The Great Gatsby", "F. Scott Fitzgerald");
console.log(bookMap.size);
8. DOM Metadata with WeakMap

Attach hidden metadata to objects

Automatic garbage collection

let button = { id: "btn1" };
let metadata = new WeakMap();
metadata.set(button, { clicked: 0 });
console.log(metadata.get(button));
button = null; // eligible for GC
9. Class Instance Tracker with WeakSet

Track active sessions

Avoid memory leaks

const activeSessions = new WeakSet();
class Session {
  constructor(userId) { this.userId = userId; activeSessions.add(this); }
}
let session1 = new Session(1);
session1 = null; // GC removes instance
10. Shopping Cart with Map
let shopping = new Map();
shopping.set(1, 200);
shopping.set(2, 600);
shopping.set(3, 400);

let total = 0;
for (let qty of shopping.values()) total += qty;
console.log("Total items:", total);
11. Anagram Checker with Set
function areAnagrams(str1, str2) {
  str1 = str1.toLowerCase().replace(/\s/g,"");
  str2 = str2.toLowerCase().replace(/\s/g,"");
  const set1 = new Set(str1), set2 = new Set(str2);
  if(set1.size !== set2.size) return false;
  for(let char of set1) if(!set2.has(char)) return false;
  return true;
}
console.log(areAnagrams("listen","silent")); // true
12. First Non-Repeating Character with Map
function firstNonRepeatingChar(str) {
  const freqMap = new Map();
  for(let char of str) freqMap.set(char, (freqMap.get(char)||0)+1);
  for(let char of str) if(freqMap.get(char)===1) return char;
  return null;
}
console.log(firstNonRepeatingChar("aabbcde")); // "c"
13. Performance: Object vs Map
const N = 100000;
const obj = {};
console.time("Object Insert");
for(let i=0;i<N;i++) obj[i]=i;
console.timeEnd("Object Insert");

const map = new Map();
console.time("Map Insert");
for(let i=0;i<N;i++) map.set(i,i);
console.timeEnd("Map Insert");
14. Voting App with Set
let voting = new Set();
for(let i=1;i<=50;i++){
  if(!voting.has(i)){ voting.add(i); console.log(`User ${i} voted ✅`);}
}
console.log("Total votes:", voting.size);
15. Employee Registry with Object Keys in Map
let emp1 = {name:"Babajide"}, emp2={name:"Adeola"};
let employeeMap = new Map();
employeeMap.set(emp1, {job:"Developer", dept:"IT"});
employeeMap.set(emp2, {job:"Designer", dept:"Design"});
console.log(employeeMap.get(emp1));
console.log(employeeMap.get(emp2));

let obj = {};
obj[emp1]="Developer"; obj[emp2]="Designer";
console.log(obj); // collision: '[object Object]'
✅ Summary

Explored Map, Set, WeakMap, WeakSet

Learned unique storage, object keys, metadata, garbage collection

Practiced common interview tasks like:

Removing duplicates

Tracking sessions

Voting systems

Shopping carts