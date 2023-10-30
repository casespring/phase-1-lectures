// Deliverables

// JavaScript Fundamentals and Data Structures Workshop

// Workshop Introduction:
// In this workshop, we'll cover JavaScript fundamentals and data structures to help you build a strong foundation.
// Let's get started!

// Variables and Data Types

// 1. Declare a variable 'age' and assign your age to it.
let age = 25;
age = 17
console.log(age);

// 2. Declare a constant 'name' and assign your name to it.

const name = "Marco";
// 3. Declare a variable 'isStudent' and assign a boolean value to it.

const isStudent = true;
// 4. Declare a variable 'score' and assign a numeric value to it.

const score = 3;
// 5. Declare an array 'fruits' and add a few different fruit names to it.

const fruits = ['apple', 'mango', 'banana', 'orange']
// 6. Declare an object 'person' with properties 'name' and 'age'.

// Console Output

// 7. Use 'console.log' to display a welcome message to the console.
console.log('Hello world!')

// Math Operations
//+, -, *, /,
//10 % 3 = 1
//10 ** 2 = 100

// 8. Perform addition and multiplication operations on two numbers and store the results in variables.

let num1 = 14;
let num2 = 15;

let product = num1 * num2;
let sum = num1 + num2;

let average = product / 2;

// Strings

// 9. Create a string variable 'greeting'
// 10. Use string interpolation to create a message by combining 'greeting' and 'name'.

let greeting = "Welcome to Flatiron School!";
console.log(`${name}, ${greeting}`);

console.log("Hello " + name + " your score is " + score);
// Conditional Statements

// 11. Write an 'if' statement to check if your age is greater than or equal to 18.
if (age >= 18) {
    console.log("Congratulations!");
}  else if (age <= 15 && age < 18) {
    console.log("You're almost there!")
} else {
    console.log("Try again when you turn 15!");
}

// 12. Use 'if-else' to display different messages based on isStudent value.
// a. If isStudent is true, display 'Welcome to Flatiron!'
// b. If isStudent is false, display 'Welcome!'
if (isStudent === true) {
    console.log("Welcome to Flatiron!");
} else {
    console.log("Welcome!");
}
// Switch Statements

switch (score) {
    case 3: 
        console.log("You hae the minimum required GPA!");
        break;
    case 4: 
        console.log("You are outsanding!");
        break;
    
}

/*=== vs ==
=== has to be the same data type 
== ambigous of the type */

// Use a switch statement to display different messages based on the value of 'score'.

// Ternary Operator

isStudent == true ? console.log("Welcome to Flatiron!") : console.log("Welcome!");

// Use a ternary operator to display different messages based on the value of 'score'.

score > 3 ? console.log("Good Job!") : console.log("Too bad!");

// Loops



// 13. Use a 'for' loop to print numbers from 1 to 5.
 //   start --   end ---  increment by 1
for (let i = 1; i < 6; i++) {
console.log(i);
}
// 14. Use a 'while' loop to print numbers from 1 to 5.
let x = 1;

while(x < 6) {
    console.log(x);
    x++;
}
// Arrays

// 15. Declare an array 'colors' with a few color names.

let colors = ["red", "green", "blue", "orange", "black", "white"];

// Loop through the 'colors' array and print each color to the console.
for (let i = 0; i < colors.length; i++) {
    console.log(i + " = " + colors[i]);
}

for (let i of colors) {
    console.log(i);
}

for (let i in colors) {
    console.log(colors[i]);
}
// Loop through the 'colors' array and print the index of each color to the console.

// ! difference between 'for', 'for...of', and 'for...in' loops

// 16. Add a new color to the 'colors' array.

colors.push("yellow");
console.log(colors[colors.length - 1]);

colors.pop();
console.log(colors[colors.length - 1]);

// console.log(colors.indexof("white"));

// 17. Access the first and last color in the array.

// access the color at a specific index.

// find the index of a color.

// check if a color exists in the 'colors' array.
// remove the last color from the 'colors' array.
// remove the first color from the 'colors' array.
