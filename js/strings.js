//string methods in Node.js

// Sample string
let str = "  Hello, Node.js! Welcome to string methods practice.  ";

// Trim whitespace
console.log("Trimmed:", str.trim());

// Convert to uppercase
console.log("Uppercase:", str.toUpperCase());

// Convert to lowercase
console.log("Lowercase:", str.toLowerCase());

// Get length of the string
console.log("Length:", str.length);

// Replace a word
console.log("Replace 'Node.js' with 'JavaScript':", str.replace("Node.js", "JavaScript"));

// Split the string into an array
console.log("Split by space:", str.split(" "));

// Find index of a word
console.log("Index of 'Welcome':", str.indexOf("Welcome"));

// Check if string includes a word
console.log("Includes 'practice':", str.includes("practice"));

// Slice a part of the string
console.log("Slice (7, 16):", str.slice(7, 16));

// Repeat the string
console.log("Repeat 2 times:", str.repeat(2));

// Concatenation
let additionalText = " Have fun learning!";
console.log("Concatenated:", str.concat(additionalText));

// Extract substring
console.log("Substring (7, 16):", str.substring(7, 16));

// Pad start of the string
console.log("Pad Start:", str.padStart(50, "*"));

// Pad end of the string
console.log("Pad End:", str.padEnd(50, "*"));

// Convert string to array of characters
console.log("Array of characters:", Array.from(str));

// Check if string starts with a word
console.log("Starts with 'Hello':", str.trim().startsWith("Hello"));

// Check if string ends with a word
console.log("Ends with 'practice.':", str.trim().endsWith("practice."));
