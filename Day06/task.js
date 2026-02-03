    // Write a Function to Convert Celsius to Fahrenheit

    function convert(a){
        let caculate = a*(9/5)+32;
        console.log(caculate)
    }
    convert(50);

    // Create a Function to Find the Maximum of Two Numbers
    function findMax(a,b){
        if (a > b){
            console.log(a);
        } else if (b > a){
            console.log(b);
        }

    }

    findMax (-10,-6);

    // Function to Check if a String is a Palindrome
    function isPalindrome(a){
        a=a.toLowerCase();
        let originalString = a
        let reversedString = a.split("").reverse().join("");
        if (originalString === reversedString){
            console.log("it is a palindrome.")
        } else {
        console.log("it is not a palindrome.") 
        }
    }
    isPalindrome("madam");


    // Write a Function to Find Factorial of a Number
    function factorial(n) {
    let result = 1;              
    for (let i = n; i >= 1; i--) { 
        result = result * i;      
    }
    console.log(result);
    }

    factorial(5);


    // Write a function to Count Vowels in a String

    function countVowels(a){
        a = a.toLowerCase();
        let count = 0;
        let vowels = "aeiou";
        
        for (let char of a) {
            if (vowels.includes(char)) {
                count++;
            }
        }

        return count;  
    }

    let resul = countVowels("Hello World");
    console.log(resul);


    // Write a Function to Capitalize the First Letter of Each Word in a Sentence

    function capitalizeWords(sentence) {
    let words = sentence.toLowerCase().split(" ");
    let result = [];

    for (let word of words) {
        let fixed = word[0].toUpperCase() + word.slice(1);
        result.push(fixed);
    }

    return result.join(" ");
    }
    let capitalizedSentence = capitalizeWords("hello world from javascript");
    console.log(capitalizedSentence);


    // Use an IIFE to Print “Hello, JavaScript!”

    (function (){
        console.log ("Hello, JavaScript!");
    })
    ();

    (function (word){
        console.log ("Hello ", word);
    })
    ("JavaScript!");

    // Create a Simple Callback Function

    function greet(name){
        console.log("hello there")

        name();
    }
    greet(function(){
        console.log("a message")
    });

    // Create Call Stack Execution Diagram for this flow

    f1
    f2
    // so f2 will enter first then f1 will because f1 is inside f2 then f1 will move out first after execution

    // Create Call Stack Execution Diagram for this flow

    // Call f2
    //   f2 enters
    //   f2 leaves

    // Call f3
    //   f3 enters
    //     f1 enters
    //     f1 leaves
    //   f3 leaves

    // Call f1
    //   f1 enters
    //   f1 leaves
