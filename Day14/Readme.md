Day 14 - JavaScript Error Handling
1. ReferenceError Example
try {
    let r = p + 50;
    console.log(r);
} catch (error) {
    console.log("An error occurred:", error.name);
}
// Output: ReferenceError


Explanation: p is not defined, so a ReferenceError is thrown.

2. Payment Processing Function
function processPayment(amount){
    try {
        let balance = 1000;
        if(amount <= 0) throw new Error("Amount must be positive");
        if(amount > balance) throw new Error("Amount exceeds balance");
        console.log(`Payment of ${amount} processed successfully`);
    } catch (error) {
        console.error("Payment failed:", error.message);
    } finally {
        console.log("Thank you for using our payment system.");
    }
}

processPayment(-300);
processPayment(1500);
processPayment(500);


Handles negative amounts and amounts exceeding balance.

Always thanks the user using finally.

3. Custom Error Classes for E-commerce
class UserError extends Error { constructor(msg){ super(msg); this.name="UserError"; } }
class PaymentError extends Error { constructor(msg){ super(msg); this.name="PaymentError"; } }
class ServerError extends Error { constructor(msg){ super(msg); this.name="ServerError"; } }
class EmailError extends Error { constructor(msg){ super(msg); this.name="EmailError"; } }

function ecommerceWebsite(action){
    try {
        if(action==="login") throw new UserError("Invalid username or password");
        if(action==="pay") throw new PaymentError("Payment declined");
        if(action==="server") throw new ServerError("Internal server error");
        if(action==="email") throw new EmailError("Failed to send email");
        console.log("Action completed successfully");
    } catch(error){
        if(error instanceof UserError) console.error("User Issue:", error.message);
        else if(error instanceof PaymentError) console.error("Payment Issue:", error.message);
        else if(error instanceof ServerError) console.error("Server Issue:", error.message);
        else if(error instanceof EmailError) console.error("Email Issue:", error.message);
        else console.error("Unknown error:", error.message);
    } finally {
        console.error("Process finished");
    }
}

ecommerceWebsite("pay");


Categorizes errors into UserError, PaymentError, ServerError, EmailError.

4. API Call Validation
function fetchData(url){
    try {
        if(!url.startsWith("https://")) throw new Error("Invalid URL: URL must start with 'https://'");
    } catch(error) {
        console.error("Invalid URL:", error.message);
    } finally {
        console.log("The process is finished");
    }
}

fetchData("http://example.com");
fetchData("https://example.com");


Ensures URLs are secure (https).

5. Custom ValidationError Constructor
function ValidationError(message) {
  this.name = "ValidationError";
  this.message = message;
  this.stack = new Error().stack;
}
ValidationError.prototype = Object.create(Error.prototype);
ValidationError.prototype.constructor = ValidationError;

function validateUser(user){
    try {
        if(!user.username) throw new ValidationError("Username cannot be empty");
        if(user.age <= 0) throw new ValidationError("Age must be a positive number");
        console.log(`${user.username} is ${user.age} years old`);
    } catch(error){
        if(error instanceof ValidationError) console.error(error.name + ":", error.message);
        else console.error("Unknown error:", error.message);
    } finally {
        console.log("Validation finished");
    }
}

const userInput = { username: "", age: -2 };
validateUser(userInput);


Handles form validation errors using a custom constructor.

6. File Reading Simulation
function readFile(filepath){
    try {
        if(filepath !== "existingFile.txt") throw new Error("File not found");
        console.log("File read successfully");
    } catch(error){
        console.error("Error reading file:", error.message);
    } finally {
        console.log("IO resources released");
    }
}

readFile("nonExistingFile.txt");
readFile("existingFile.txt");


Simulates file reading and proper cleanup using finally.

7. JSON Parsing with Error Handling
function parseJson(str){
    try {
        let result = JSON.parse(str);
        console.log("Parsed JSON:", result);
    } catch(error) {
        console.error("Invalid JSON:", error.message);
        return "Invalid JSON";
    }
}

parseJson('{"name": "John", "age": 30}');


Returns a clear error message for invalid JSON.

8. Purpose of throw

throw is used to manually create an error when a condition fails.

9. Purpose of finally

finally runs regardless of whether an error occurs.

Useful for cleanup, releasing resources, logging, etc.

10. Try-Catch-Throw Reference Table
Keyword	Purpose
try	Encloses code that might throw an error
catch	Handles errors thrown in the try block
throw	Manually throws an error
rethrow	Re-raises an error caught in a catch block
error object	Represents the error thrown, contains name, message, stack