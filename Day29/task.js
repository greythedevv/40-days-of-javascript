// // 1. Identify Real-Life Objects with OOP Concepts
// Object 1: Smartphone

// Properties (Attributes):

// Brand (e.g., Apple, Samsung) → Encapsulation: The brand is stored inside the object and can
//  be accessed safely.

// Battery Level → Encapsulation: Battery is private data that can be modified through methods like 
// charge().

// Storage Capacity → Encapsulation: Stored inside the phone object, hidden from the outside world.

// Behaviors (Methods):

// Make Call → Abstraction: User doesn’t need to know the inner circuits, just presses a button.

// Take Photo → Abstraction: Camera functions are hidden; only the method is visible.

// Charge Battery → Encapsulation: Direct battery modification is controlled via a method.

// Object 2: Bicycle

// Properties:

// Color → Encapsulation: Color is part of the bike and can be changed safely via a method.

// Gear Count → Encapsulation: Hidden inside the bike object.

// Tire Size → Encapsulation: Internal property of the bike.

// Behaviors:

// Pedal → Abstraction: Rider doesn’t need to know how chain moves the wheel.

// Brake → Abstraction/Encapsulation: Stops movement safely.

// Change Gear → Polymorphism: Same method can behave differently depending on the gear type.

// Object 3: School

// Properties:

// Name → Encapsulation: Stored internally.

// Number of Students → Encapsulation: Only accessible through methods.

// Location → Encapsulation: Internal property.

// Behaviors:

// Admit Student → Abstraction: The process is simplified into a single method.

// Conduct Exam → Abstraction: Users don’t need internal details.

// Hire Staff → Encapsulation: Staff list is modified safely via a method.

// 2. Diagram of an OOP Modeled System: Library System

// Here’s a textual diagram for clarity:

//                 ┌────────────┐
//                 │   Library  │
//                 └────────────┘
//                        │
//        ┌───────────────┴───────────────┐
//        │                               │
//  ┌─────────────┐                  ┌─────────────┐
//  │    Book     │                  │   Member    │
//  ├─────────────┤                  ├─────────────┤
//  │ title       │                  │ name        │
//  │ author      │                  │ membershipID│
//  │ ISBN        │                  │ borrowedBooks│
//  ├─────────────┤                  ├─────────────┤
//  │ borrow()    │                  │ borrowBook()│
//  │ return()    │                  │ returnBook()│
//  │ reserve()   │                  │ payFine()   │
//  └─────────────┘                  └─────────────┘
 
//        ┌─────────────┐
//        │   Staff     │
//        ├─────────────┤
//        │ name        │
//        │ staffID     │
//        │ role        │
//        ├─────────────┤
//        │ addBook()   │
//        │ removeBook()│
//        │ assist()    │
//        └─────────────┘

// Relationships:

// Member borrows Book → composition (has-a)

// Staff manages Book → composition

// Encapsulation: Data like borrowedBooks, ISBN, staffID are stored privately.

// Methods: Each class encapsulates the behavior relevant to it.

// 3. Explain OOP Principles with Human Analogies

// Abstraction – Think of a car: you just press the accelerator or brake; you don’t see the engine
//  or fuel injection.

// Encapsulation – Your bank account: money is hidden, you can only add or withdraw via proper methods 
// (deposit/withdraw).

// Inheritance – A teacher inherits traits from a human: they can eat, sleep, talk, plus teach.

// Polymorphism – A universal remote: one button may turn on TV, fan, or speaker depending on the device.

// Composition – Building a house: bricks + windows + doors come together to form the house; each part 
// is separate but forms a whole.

// 4. Compare OOP vs Functional Thinking

// System: To-Do App

// OOP Approach:

// Objects: Task, User, ToDoList

// Task object has attributes: title, dueDate, status

// Task object has methods: markComplete(), editTask(), deleteTask()

// ToDoList object manages multiple Tasks with addTask(), removeTask()

// Functional Approach:

// Functions: createTask(title, dueDate), deleteTask(taskID), markComplete(task)

// Data stored in arrays or dictionaries

// No objects; tasks are simple data structures passed to functions

// Functions operate on data immutably

// 5. Object vs Class vs Function – Explain Like a Teacher

// Class: 🎨 Think of a class as a blueprint for a toy. It tells you how to make the toy, but it’s not
//  a toy itself.

// Object: 🧸 An object is a toy you actually made using the blueprint. Each toy can be different (red,
//  blue, big, small) but follows the blueprint.

// Function: 🛠️ A function is a special action your toy can do, like “jump” or “spin.” You can use it 
// on any toy that knows how to perform that action.