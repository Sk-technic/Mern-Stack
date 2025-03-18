// array-methods.js

console.log("🔹 Array Methods in Node.js 🔹");

const arr = [1, 2, 3, 4, 5];

// 1. forEach - Iterates over elements
arr.forEach((num) => console.log(num));

// 2. map - Returns a new array with modified values
const doubled = arr.map(num => num * 2);
console.log("map:", doubled);

// 3. filter - Filters elements based on condition
const evens = arr.filter(num => num % 2 === 0);
console.log("filter:", evens);

// 4. reduce - Reduces array to a single value
const sum = arr.reduce((acc, num) => acc + num, 0);
console.log("reduce:", sum);

// 5. find - Finds first matching element
const found = arr.find(num => num > 3);
console.log("find:", found);

// 6. findIndex - Finds index of first matching element
const foundIndex = arr.findIndex(num => num > 3);
console.log("findIndex:", foundIndex);

// 7. some - Checks if any element matches condition
const hasEven = arr.some(num => num % 2 === 0);
console.log("some:", hasEven);

// 8. every - Checks if all elements match condition
const allPositive = arr.every(num => num > 0);
console.log("every:", allPositive);

// 9. includes - Checks if element exists
console.log("includes:", arr.includes(3));

// 10. indexOf - Finds index of an element
console.log("indexOf:", arr.indexOf(3));

// 11. push - Adds elements to end
arr.push(6);
console.log("push:", arr);

// 12. pop - Removes last element
arr.pop();
console.log("pop:", arr);

// 13. unshift - Adds elements to start
arr.unshift(0);
console.log("unshift:", arr);

// 14. shift - Removes first element
arr.shift();
console.log("shift:", arr);

// 15. slice - Extracts portion of array
console.log("slice:", arr.slice(1, 3));

// 16. splice - Removes/Replaces/Adds elements
arr.splice(2, 1, 99);
console.log("splice:", arr);

// 17. concat - Merges arrays
console.log("concat:", arr.concat([7, 8, 9]));

// 18. join - Converts array to string
console.log("join:", arr.join(" - "));

// 19. reverse - Reverses array
console.log("reverse:", arr.reverse());

// 20. sort - Sorts array (by default, lexicographically)
console.log("sort:", arr.sort((a, b) => a - b));

// 21. fill - Fills array with a value
console.log("fill:", arr.fill(0, 1, 3));

// 22. flat - Flattens nested arrays
const nestedArr = [1, [2, 3], [4, [5, 6]]];
console.log("flat:", nestedArr.flat(2));

// 23. keys - Iterator for keys
console.log("keys:", [...arr.keys()]);

// 24. values - Iterator for values
console.log("values:", [...arr.values()]);

// 25. entries - Iterator for key-value pairs
console.log("entries:", [...arr.entries()]);

// 26. toSorted - Immutable sort (ES2023)
console.log("toSorted:", arr.toSorted((a, b) => b - a));

// 27. toReversed - Immutable reverse (ES2023)
console.log("toReversed:", arr.toReversed());
