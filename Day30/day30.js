// 1. Create a Book Class
// Create a Book class with properties: title, author, pages.
// Add a method describe() that logs: "Title: [title], Author: [author], Pages: [pages]"
// Create at least two book objects and call the describe() method.

class book{
    constructor(title, author, pages){
        this.title = title
        this.author = author
        this.pages = pages
    }
    describe(){
        console.log(`Title: ${this.title}, Author: ${this.author}, pages: ${this.pages}`)
    }
}

let myBook = new book("mybok", "greatness", 6000)
let uBook = new book("ubok", "greatness", 600000)
myBook.describe()
uBook.describe()



// 2. Use Getters and Setters with a Temperature Class
// Create a Temperature class with a private field _celsius.
// Add a getter to return Fahrenheit value.
// Add a setter to set Celsius temperature.
// Test setting temperature and logging Fahrenheit.
// this._celsius * 1.8 + 32;

class Temperature {
  constructor(celsius) {
    this._celsius = celsius;
  }

  // Getter to convert Celsius to Fahrenheit
  get fahrenheit() {
    return this._celsius * 1.8 + 32;
  }

  // Setter to update Celsius
  set celsius(value) {
    this._celsius = value;
  }
}

// Testing the class
const temp = new Temperature(25);

temp.celsius = 30; // set new Celsius temperature

console.log(temp.fahrenheit); // get Fahrenheit value


// 3. Build a User Class with Public & Private Fields
// Fields: name, #password
// Add a method checkPassword(pw) that checks if it matches #password.
// Show how private fields can’t be accessed directly outside the class.

class User {
  name;
  #password;

  constructor(name, password) {
    this.name = name;
    this.#password = password;
  }

  checkPassword(pw) {
    if (pw === this.#password) {
      console.log("Password is correct");
    } else {
      console.log("Password is incorrect");
    }
  }
}

let great = new User("great", "1999");

great.checkPassword("1999"); // correct
great.checkPassword("1111"); // incorrect

// Trying to access private field
// console.log(great.#password); // ❌ Error


// 4. Inheritance — Vehicle and Car
// Vehicle class has fields: make, model, and method start()
// Car extends Vehicle, adds fuelType
// Override the start() method in Car to print: "Starting [fuelType] car: [make] [model]"

class vehicle {
    constructor(make , model){
        this.make = make
        this.model = model
    }

    start(){
        console.log(`${this.make} of ${this.model} has started`)
    }
}
class car extends vehicle{
    constructor(make, model, fuelType){
        super(make, model)
        this.fuelType = fuelType
    }

    start(){
        console.log(`starting ${this.fuelType} car: ${this.make} ${this.model}`)
    }
}

let bmw = new car("bmw" , "a15" , "perol")
bmw.start()

// 5. Use a Static Method
// Create a class MathUtils with static methods: add(a, b), subtract(a, b), randomInt(min, max)
// Call the methods without creating an object.

class MathUtils {
  static add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }

  static randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

console.log(MathUtils.add(5, 6));
console.log(MathUtils.subtract(8, 6));
console.log(MathUtils.randomInt(1, 10));


// 6. Smart Light Bulb Class with Access Control
// Create a SmartLightBulb class:
// Public method: turnOn(), turnOff()
// Private method: #connectToWiFi()
// turnOn() first calls #connectToWiFi() and then logs: "Light is ON"
// Static method: info() — logs "SmartLightBulb v1.0 supports remote control and scheduling."
// Try accessing the private method directly and observe the error.
class SmartLightBulb {
  brand;
  _log = [];

  constructor(brand) {
    this.brand = brand;
  }

  // Private method
  #connectToWiFi() {
    console.log("Connected to WiFi");
  }

  // Public method
  turnOn() {
    this.#connectToWiFi(); // call private method
    console.log("Light is ON");
  }

  turnOff() {
    console.log("Light is OFF");
  }

  // Static method
  static info() {
    console.log(
      "SmartLightBulb v1.0 supports remote control and scheduling."
    );
  }
}

// Test
let pako = new SmartLightBulb("Philips");

pako.turnOn();  // Works
pako.turnOff(); // Works

SmartLightBulb.info(); // Static method called on class

// Trying to access private method directly
// pako.#connectToWiFi(); // ❌ Error: private field

// 7. Animal Class and Subclasses
// Base Class: Animal(name, sound)
// Method: makeSound() logs: "The [name] says [sound]"
// Subclass 1: Dog(name) — inherits from Animal
// Overrides makeSound() → "The Dog [name] barks!"
// Subclass 2: Cat(name) — overrides makeSound() → "The Cat [name] meows!"
// Call super() inside each subclass constructor
// Add a shared method sleep() in Animal and test with both Dog and Cat instances.

class Animal{
    constructor(name, sound){
        this.name = name
        this.sound = sound
    }

    makeSound(){
        console.log(`the ${this.name} says ${this.sound}`)
    }
    sleep(){
        console.log(`the ${this.name} is sleeping`)
    }
}

class Dog extends Animal{
    constructor(name, sound){
        super(name, sound)
    }

    makeSound(){
        console.log(`the Dog ${this.name} barks!`)
    }
}

class cat extends Animal{
    constructor(name, sound){
        super(name, sound)
    }
    makeSound(){
        console.log(`the cat ${this.name}meows!`)
    }
}

let dog1 = new Dog("Rex", "wolf")
dog1.sleep()
dog1.makeSound()

let cat1 = new cat("Mittens", "meow")
cat1.sleep()
cat1.makeSound()