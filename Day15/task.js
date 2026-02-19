// Create an array of 5 elements using the Array Constructor.
let arr = new Array("a", "b", "c", "d", "e");

// Create an array of 3 empty slots.
let arr2 = [, , , "c","d"];

// Create an array of 6 elements using the Array literals and access the fourth element in the array
// using its length property

let arr3 =[1, 2, 3, 4, 5, 6 , 7];

const fourthElement = arr3[arr3.length - 3];

console.log(fourthElement);

// Use the for loop on the above array to print elements in the odd index.

for (let i = 0; i < arr3.length; i++) {
    if (i % 2 === 1) {
        console.log(arr3[i]);
    }
}
// Add one element at the front and the end of an array

arr3.push(8)
arr3.unshift(0)
// console.log(arr3)


// Remove an element from the front and the end of an array.
arr3.pop()
arr3.shift()
console.log(arr3)

// Create an array containing the name of your favourite foods(10 foods). Destructure the 6th food 
// element from the array using destructuring.

const foods = [
  "Rice",
  "Pizza",
  "Burger",
  "Pasta",
  "Jollof Rice",
  "Chicken",
  "Salad",
  "Yam",
  "Beans",
  "Ice Cream"
];

let [, , , , ,sixth , ] = foods

console.log(sixth)

let [first, second, ... third] = foods
console.log(third)

//  Clone an Array(Shallow cloning)
let clonedArray = foods.slice()
console.log(clonedArray)

// Empty an array using its length property
console.log(foods.length= 0)

//  Create an array of 10 elements(number 1 to 10). Resize the array to length 6 once you find the 
//  number 5 in that array. Hint: Use for-loop.

let number =[1,2,3,4,5,6,7,8,9,10]

for (let i=0; i < number.length; i++){
    if(number[i] ===5){
        number.length=6
        break
    }
}

console.log(number)

// Create an Array of 10 elements. Use the splice() method to empty the array.

const numbers = [1,2,3,4,5,6,7,8,9,10];

numbers.splice(0,10)
console.log(numbers)

// Create an Array of 10 elements. You can empty the array in multiple ways: using the length property,
// using the pop() method, using the shift() method, setting the array with [], or the splice() method. 
// Which among these methods are most efficient and why?

const items = [
  "Apple",
  "Banana",
  "Orange",
  "Mango",
  "Grapes",
  "Pineapple",
  "Watermelon",
  "Cherry",
  "Peach",
  "Strawberry"
];

console.log(items.length=0)
console.log(items.pop=0)
console.log(items.shift=0)
items.splice(0,10)
console.log(items)

// the splices is the most effective because it specify what we want it to modify

// What happens when you concatenate two empty arrays?
let first1 = []
let second1= []

console.log(first1.concat(second1))


// How can you check if a value is partially matching with any of the elements of an Array?
const fruits = ["apple", "banana", "orange", "grapefruit"];

const search = "ap"; // partial value

const found = fruits.some(fruit => fruit.includes(search));

console.log(found); // true


// What is the difference between the slice() and splice() methods?

// slice is used to clone an array while splice is used to modify an array (add, delete)

//  Create an Array of alphanumeric strings. Sort the elements in both ascending and descending orders. 
// //  You must be doing this in an immutable way such that the source array never gets modified.

const alphanumericArray = [
  "A1B2",
   "M3N4",
  "S9T0",
  "C3D4",
  "E5F6",
  "I9J0",
  "G7H8",
  "K1L2",
  "O5P6",
  "Q7R8",
  
];

let sortArray = alphanumericArray.toSorted()
console.log(sortArray)

// console.log(alphanumericArray)

let sortArray1 = alphanumericArray.toSorted(function(a,b){
    return a===b? 0 : a>b ? -1 : 1
})

    

console.log(sortArray1)

// Can you give examples of sparse and dense arrays?

// A sparse array is an array that has empty slots, while a dense array is an array that has no empty
// slots.

// Example of a sparse array
let sparseArray = [1, , 3, , 5];
console.log(sparseArray); // Output: [1, <1 empty slot>, 3, <1 empty slot>, 5]

//  Give a practical usages of the .fill() method

let fillExample= ["red", "blue" ,"grey"]

fillExample.fill("pink")

console.log(fillExample)

// How to convert an array to a string?

// we use sort

// employees array: An array of emplyees working in a department.

const employees = [
  { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
  { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
  { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
  { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
  { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
  { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
  { id: 7, name: "George", departmentId: 3, salary: 5200 },
  { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
  { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
  { id: 10, name: "Jane", departmentId: 1, salary: 5100 },
];
// departments array: An array of departments where emplyees work.

const departments = [
  { id: 1, name: "HR" },
  { id: 2, name: "Engineering" },
  { id: 3, name: "Marketing" },
  { id: 4, name: "Sales" },
];


let workersEngi = Object.groupBy(employees, ({departmentId}) => 
    
return departmentId===2 ? "Engineering" : "Other";
})

