console.log("day 14")

// 1. What will be the output of the following code?
try {
    let r = p + 50;
    console.log(r);
} catch (error) {
    console.log("An error occurred:", error.name);
}
// ReferenceError
// SyntaxError
// TypeError
// No error, it prints 10

// it prints out ReferenceError because p is not defined.

// 2. Write a function processPayment(amount) that checks if the amount is positive and not exceeding 
// balance. If any condition fails, throw appropriate errors

function processPayment(amount){
    try{
        let balance = 1000;
        if(amount <= 0){
            throw new Error("Amount must be positive");
        } else if(amount > balance){
            throw new Error("Amount exceeds balance");
         } else {console.log(`payment of ${amount} processed successfully`)}
        } catch (error){
        console.error("payment failed:", error.message);
    } finally {
        console.log("Thank you for using our payment system.");
    }
}

processPayment(-300);
processPayment(1500);
processPayment(500);


// 3. Implement a custom error handling system for an e-commerce website that categorizes errors as
// UserError
// PaymentError
// ServerError
// EmailError

class UserError extends Error {
  constructor(message) {
    super(message);
    this.name = "UserError";
  }
}

class PaymentError extends Error {
  constructor(message) {
    super(message);
    this.name = "PaymentError";
  }
}

class ServerError extends Error {
  constructor(message) {
    super(message);
    this.name = "ServerError";
  }
}

class EmailError extends Error {
  constructor(message) {
    super(message);
    this.name = "EmailError";
  }
}

function ecommerceWebsite(action) {
  try {
    if (action === "login") {
      throw new UserError("Invalid username or password");
    }

    if (action === "pay") {
      throw new PaymentError("Payment declined");
    }

    if (action === "server") {
      throw new ServerError("Internal server error");
    }

    if (action === "email") {
      throw new EmailError("Failed to send email");
    }

    console.log("Action completed successfully");

  } catch (error) {

    if (error instanceof UserError) {
      console.error("User Issue:", error.message);

    } else if (error instanceof PaymentError) {
      console.error("Payment Issue:", error.message);

    } else if (error instanceof EmailError) {
      console.error("Email Issue:", error.message);

    } else if (error instanceof ServerError) {
      console.error("Server Issue:", error.message);

    } else {
      console.error("Unknown error:", error.message);
    }

  } finally {
    console.error("Process finished");
  }
}
ecommerceWebsite("pay");


// 4. Simulate an API call function fetchData(url). If the URL does not start with "https", throw an
//  "Invalid URL" error. Handle it using try...catch

function fetchData(url){
    try {
        if(!url.startsWith("https://")) {
            throw new Error("Invalid URL: URL must start with 'https://'")
        }
    }catch(error){
        console.error("Invalid URL:", error.message)
    } finally{
        console.log("the process is finished")
    }
}

fetchData("http://example.com");
fetchData("https://example.com");

// 5. Implement a custom error type ValidationError using constructor functions to handle form validation
//  errors
// Example:

// const userInput = { username: "", age: -2 };
// validateUser(userInput);

// // Output:
// // ValidationError: Username cannot be empty
// // ValidationError: Age must be a positive number

function ValidationError(message) {
  this.name = "ValidationError"; // error type
  this.message = message;        // error message
  this.stack = new Error().stack; // optional: keeps stack trace
}

// Make sure it inherits from Error
ValidationError.prototype = Object.create(Error.prototype);
ValidationError.prototype.constructor = ValidationError;

function validateUser(user) {
  try {
    if (!user.username) {
      throw new ValidationError("Username cannot be empty");
    }
    if (user.age <= 0) {
      throw new ValidationError("Age must be a positive number");
    }

    console.log(`${user.username} is ${user.age} years old`);
  } catch (error) {
    if (error instanceof ValidationError) {
      console.error(error.name + ":", error.message);
    } else {
      console.error("Unknown error:", error.message);
    }
  } finally {
    console.log("Validation finished");
  }
}
const userInput = { username: "", age: -2 };
validateUser(userInput);



// 6. Write a function readFile(filePath) that simulates reading a file. If the file does not exist 
// (simulate with a condition), throw a "File not found" error. Handle the error with try...catch.
//  Make sure you have code to handle releasing the IO resources

function readFile(filepath){
    try {
        if(filepath !== "existingFile.txt"){
            throw new Error("File not found");
        }   else {      
            console.log("File read successfully");
        }
    } catch(error) {
        console.error("Error reading file:", error.message);
    } finally {
        console.log("IO resources released");   
    }
}
readFile("nonExistingFile.txt");
readFile("existingFile.txt");


// 7. Write a function parseJson(str) that takes a JSON string and tries to parse it using JSON.parse(). 
// If parsing fails, catch the error and return "Invalid JSON"

function parseJson(str){
    try {
        let result = JSON.parse(str);
        console.log("Parsed JSON:", result);
    } catch (error) {
        console.error("Invalid JSON:", error.message);
        return "Invalid JSON";
    }

}

parseJson('{"name": "John", "age": 30}');

// 8. What is the purpose of throw in JavaScript?
// It catches an error
// It stops the execution of a program
// It creates a new error manually
// It prints an error message

// The purpose of throw in JavaScript is to create a new error manually. It allows you to generate custom
// errors when certain conditions are met, which can then be caught and handled using try...catch blocks.

// 9. What does the finally block do in a try...catch statement?
// Runs only if an error occurs
// Runs only if no error occurs
// Runs regardless of whether an error occurs or not
// Stops the execution of the script

// The finally block in a try...catch statement runs regardless of whether an error occurs or not. It is
// used to execute code that must run after the try and catch blocks, such as cleanup tasks or releasing 
// resources, ensuring that it executes even if an error is thrown.

// 10. Create a table exaplaining the usages of try, catch, throw, rethrow, error object

// | Keyword   | Purpose |  
// |-----------|---------|
// | try       | Encloses code that might throw an error |
// | catch     | Handles errors thrown in the try block |
// | throw     | Manually throws an error |
// | rethrow   | Re-raises an error caught in a catch block |
// | error object | Represents the error that was thrown and contains information about it (message, name,
//  stack) |