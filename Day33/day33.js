// . Create a Map of Student IDs and Names
// Add at least 5 students.
// Retrieve a name using a student ID.
// Delete one entry and print the Map.

let map = new Map();

map.set(1, "greatness");
map.set(2, "adeola");
map.set(3, "olushola");
map.set(4, "daramola");
map.set(5, "shina");

console.log(map);

console.log(map.get(3)); 

map.delete(5);

console.log(map);

// 2. Create a Set of Programming Languages
// Add duplicate languages to test uniqueness.
// Iterate and print all unique entries.

let set = new Set (["javaScript", "phyton", "React", "next", "vue"])
// console.log(set)

set.add("javaScript")

console.log(set.values())

// 3. Compare Object vs Map for Key-Value Storage
// Store the same data in both.
// Compare insertion order and key types (e.g., object keys).

// 1. Store the Same Data
// Using an Object
let studentObj = {
  1: "Greatness",
  2: "Adeola",
  3: "Olushola",
  4: "Daramola",
  5: "Shina"
};

console.log(studentObj);

// Using a Map
let studentMap = new Map();

studentMap.set(1, "Greatness");
studentMap.set(2, "Adeola");
studentMap.set(3, "Olushola");
studentMap.set(4, "Daramola");
studentMap.set(5, "Shina");

console.log(studentMap);

// 2. Insertion Order
// Object
for (let key in studentObj) {
  console.log(key, studentObj[key]);
}
// Map
for (let [key, value] of studentMap) {
  console.log(key, value);
}

// 📌 Difference

// Map always keeps the exact insertion order.

// Objects may reorder numeric keys automatically.

// Example:

let obj1 = {
  3: "C",
  1: "A",
  2: "B"
};

console.log(obj1);

// Output:

// {1: "A", 2: "B", 3: "C"}

// The order changed automatically.

// But with Map:

let map1 = new Map();
map.set(3,"C");
map.set(1,"A");
map.set(2,"B");

console.log(map1);

// Output keeps insertion order:

// 3 → C
// 1 → A
// 2 → B
// 3. Key Types
// Object Keys

// Objects only allow strings or symbols as keys.

let obj = {};
obj[1] = "Number key";
obj["1"] = "String key";

console.log(obj);

// Both keys become "1".

// Map Keys

// Maps allow any data type as keys.

let map2 = new Map();

map.set(1, "Number key");
map.set("1", "String key");

console.log(map2);

// These are treated as different keys.

// 4. Build a Contact List Using Map
// Use phone numbers as keys and names as values.
// Add, update, delete contacts.
// Search for a contact by number.

let contactList = new Map([
    ["08032215882", "greatness"],
    ["08332215882", "great"],
    ["08021785882", "ness"],
    ["08054095882", "eatns"]
])

contactList.set("07043367967", "biyi")
contactList.set("08032215882", "bimbo")
contactList.delete("08032215882")
console.log(contactList)


// 5. Remove Duplicates from Array Using Set
// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana'];
// Convert to a Set and back to an array with only unique values.

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana']

let fruitConvert = new Set (fruits)

console.log(fruitConvert)
let converted = [...fruitConvert]
console.log(converted)

// 6. Track User Logins with Set
// Add user IDs when users log in.
// Remove them on logout.
// Check if a specific user is currently logged in.

let login = new Set();

// login
login.add(1);
login.add(2);

// logout
login.delete(1);

// check if user is still logged in
console.log(login.has(1)); // false
console.log(login.has(2)); // true

// print current logged-in users
console.log(login);

// 7. Create a Map of Book Titles and Authors
// Add at least 5 entries.
// Update an author.
// Count the number of books.

let bookMap = new Map ()
bookMap.set("how to become a dullard", "oluwole greatness")
bookMap.set("Things Fall Apart",  "Chinua Achebe 📚")
bookMap.set("1984", "George Orwell" )
bookMap.set("The Great Gatsby", "F. Scott Fitzgerald 📚")
bookMap.set("The Great Gatsby", "F. Scott Fitzgerald")

bookMap.set("how to become a dullard", "oluwole greatness adeola")
let count = 0

for (let i = 0 ; i <= bookMap.size ; i++){
    count++
    console.log(count)
}


console.log(bookMap)

// 8. Associate Metadata with DOM Elements Using WeakMap
// Create fake DOM elements (objects).
// Store related metadata in a WeakMap.
// Demonstrate benefits for garbage collection.
let button = { id: "btn1" };
let input = { id: "input1" };

let metadata = new WeakMap();

metadata.set(button, { clicked: 0 });
metadata.set(input, { focused: false });

console.log(metadata.get(button));

button = null; // object becomes eligible for garbage collection


// 9. Track Instances of a Class with WeakSet
// Define a Session class.
// Add each instance to a WeakSet when created.
// Discuss how it avoids memory leaks.

const activeSessions = new WeakSet();

class Session {
  constructor(userId) {
    this.userId = userId;
    activeSessions.add(this);
  }
}

let session1 = new Session(1);
let session2 = new Session(2);

console.log(activeSessions.has(session1)); // true

session1 = null; // object can be garbage collected

// 10. Build a Shopping Cart Using Map
// Product IDs as keys and quantity as values.
// Add, remove, and update quantities.
// Calculate total items in the cart.

let shopping = new Map();

shopping.set(1, 200);
shopping.set(2, 300);
shopping.set(3, 400);

// remove product
shopping.delete(1);

// update quantity
shopping.set(2, 600);

console.log(shopping);

// calculate total items
let total = 0;

for (let value of shopping.values()) {
  total += value;
}

console.log("Total items:", total);


// 11. Anagram Checker with Set
// Write a function that checks if two strings are anagrams.
// Use Sets to compare character presence.

function areAnagrams(str1, str2) {
  // Convert strings to lowercase and remove spaces
  str1 = str1.toLowerCase().replace(/\s/g, "");
  str2 = str2.toLowerCase().replace(/\s/g, "");

  // Create sets of characters
  const set1 = new Set(str1);
  const set2 = new Set(str2);

  // Compare lengths first
  if (set1.size !== set2.size) return false;

  // Check every character in set1 exists in set2
  for (let char of set1) {
    if (!set2.has(char)) return false;
  }

  return true;
}

// 12. First Non-Repeating Character with Map
// Count character frequencies in a string using a Map.
// Return the first character with count 1.

function firstNonRepeatingChar(str) {
  const freqMap = new Map();

  // Count frequency of each character
  for (let char of str) {
    freqMap.set(char, (freqMap.get(char) || 0) + 1);
  }

  // Find first character with count 1
  for (let char of str) {
    if (freqMap.get(char) === 1) {
      return char;
    }
  }

  return null; // if all characters repeat
}

console.log(firstNonRepeatingChar("aabbcde")); // "c"
console.log(firstNonRepeatingChar("aabbcc"));  // null
console.log(firstNonRepeatingChar("swiss"));   // "w"


// 13. Measure Performance: Object vs Map
// Insert 100,000 key-value pairs into both.
// Use console.time() to benchmark speed.

// Number of entries
const N = 100000;

// --- Using Object ---
const obj4 = {};
console.time("Object Insert");

for (let i = 0; i < N; i++) {
  obj4[i] = i;
}

console.timeEnd("Object Insert");

// --- Using Map ---
const map4 = new Map();
console.time("Map Insert");

for (let i = 0; i < N; i++) {
  map4.set(i, i);
}

console.timeEnd("Map Insert");

// 14. Voting App with Set to Prevent Duplicate Votes
// Track user IDs in a Set.
// Allow each ID to vote only once.

let voting = new Set();
const totalUsers = 50;

for (let i = 1; i <= totalUsers; i++) {
  if (!voting.has(i)) {
    voting.add(i);
    console.log(`User ${i} voted ✅`);
  } else {
    console.log(`User ${i} already voted ❌`);
  }
}

// Try duplicate vote
voting.add(25); 
console.log(voting.has(25)); // true
console.log("Total votes:", voting.size);


// 15. Employee Registry Using Object Keys in Map
// Use employee objects as keys.
// Add and retrieve job-related info.
// Show that Object keys don't work similarly in plain objects.

// Create employee objects
let employee1 = { name: "Babajide" };
let employee2 = { name: "Adeola" };

// Create a Map to store employee info
let employeeMap = new Map();

// Use employee objects as keys
employeeMap.set(employee1, { job: "Developer", dept: "IT" });
employeeMap.set(employee2, { job: "Designer", dept: "Design" });

// Retrieve info using the employee object
console.log(employeeMap.get(employee1)); // { job: 'Developer', dept: 'IT' }
console.log(employeeMap.get(employee2)); // { job: 'Designer', dept: 'Design' }

// Show that using object keys in a plain object doesn’t work
let obj = {};
obj[employee1] = "Developer";
obj[employee2] = "Designer";

console.log(obj); 
// Output: { '[object Object]': 'Designer' }
// ❌ Both keys become the string "[object Object]" → collision