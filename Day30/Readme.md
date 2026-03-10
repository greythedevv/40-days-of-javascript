Day 30 of 40 Days of JavaScript – Object-Oriented Programming (OOP)
Overview

On Day 30, we focused on Object-Oriented Programming (OOP) in JavaScript.
The goal was to understand and practice concepts such as:

Classes and Objects

Getters and Setters

Public and Private Fields

Inheritance

Method Overriding

Static Methods

Access Control

Exercises Completed
1. Book Class

Created a Book class with title, author, pages properties and a describe() method.
Tested with multiple book objects.

let myBook = new Book("myBook", "Greatness", 6000);
myBook.describe();

Output:

Title: myBook, Author: Greatness, Pages: 6000
2. Temperature Class with Getters and Setters

Created a Temperature class with private _celsius field.

Getter: converts Celsius to Fahrenheit

Setter: updates Celsius temperature

temp.celsius = 30;
console.log(temp.fahrenheit); // 86
3. User Class with Public & Private Fields

Created a User class with:

name → public

#password → private

Method checkPassword(pw) to validate passwords

let user = new User("great", "1999");
user.checkPassword("1999"); // Password is correct

Private fields cannot be accessed outside the class:

// console.log(user.#password); // ❌ Error
4. Inheritance – Vehicle and Car

Vehicle class: make, model, start()

Car subclass: adds fuelType and overrides start()

let bmw = new Car("BMW", "A15", "Petrol");
bmw.start(); // starting Petrol car: BMW A15
5. Static Methods – MathUtils

Created a MathUtils class with static methods:

add(a, b)

subtract(a, b)

randomInt(min, max)

Called directly on the class without creating an object:

MathUtils.add(5,6);        // 11
MathUtils.randomInt(1,10); // random number
6. SmartLightBulb Class with Access Control

Public methods: turnOn(), turnOff()

Private method: #connectToWiFi()

Static method: info()

let pako = new SmartLightBulb("Philips");
pako.turnOn(); // Connected to WiFi, Light is ON
SmartLightBulb.info(); // SmartLightBulb v1.0 supports remote control...

Private methods cannot be accessed outside:

// pako.#connectToWiFi(); // ❌ Error
7. Animal Class and Subclasses

Animal base class: name, sound, makeSound(), sleep()

Dog subclass: overrides makeSound() → barks

Cat subclass: overrides makeSound() → meows

let dog1 = new Dog("Rex", "wolf");
dog1.sleep();      // the Rex is sleeping
dog1.makeSound();  // the Dog Rex barks!

let cat1 = new Cat("Mittens", "meow");
cat1.sleep();      // the Mittens is sleeping
cat1.makeSound();  // the cat Mittens meows!
Key Learnings

Classes allow structured and reusable code.

Getters and Setters provide controlled access to properties.

Private fields/methods (#) protect data from external access.

Static methods belong to the class, not instances.

Inheritance and method overriding promote code reuse.

Encapsulation improves code maintainability and security.



