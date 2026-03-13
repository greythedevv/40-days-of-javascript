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