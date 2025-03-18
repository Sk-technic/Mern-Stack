//number methods in Node.js

// Sample number
let num = 123.456;

// Convert to string
console.log("To String:", num.toString());

// Convert to fixed decimal places
console.log("To Fixed (2 decimals):", num.toFixed(2));

// Convert to exponential notation
console.log("To Exponential (2 decimals):", num.toExponential(2));

// Convert to precision
console.log("To Precision (4 digits):", num.toPrecision(4));

// Parse integer from string
console.log("Parse Int from '42px':", parseInt("42px"));

// Parse float from string
console.log("Parse Float from '3.14m':", parseFloat("3.14m"));

// Check if value is an integer
console.log("Is Integer (123):", Number.isInteger(123));
console.log("Is Integer (123.45):", Number.isInteger(123.45));

// Check if value is NaN
console.log("Is NaN ('abc' / 2):", Number.isNaN("abc" / 2));

// Check if value is finite
console.log("Is Finite (Infinity):", Number.isFinite(Infinity));
console.log("Is Finite (100):", Number.isFinite(100));

// Truncate the decimal part
console.log("Truncate (123.456):", Math.trunc(123.456));

// Get absolute value
console.log("Absolute Value of -50:", Math.abs(-50));

// Round to nearest integer
console.log("Round (123.7):", Math.round(123.7));

// Round down
console.log("Floor (123.7):", Math.floor(123.7));

// Round up
console.log("Ceil (123.2):", Math.ceil(123.2));

// Get maximum of multiple numbers
console.log("Max (3, 7, 2, 9):", Math.max(3, 7, 2, 9));

// Get minimum of multiple numbers
console.log("Min (3, 7, 2, 9):", Math.min(3, 7, 2, 9));

// Generate random number between 0 and 1
console.log("Random Number:", Math.random());

// Generate random integer between 1 and 10
console.log("Random Integer (1-10):", Math.floor(Math.random() * 10) + 1);
