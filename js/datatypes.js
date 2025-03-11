// nodejs_data_types.js

// 1. String (Primitive)
let name = "John Doe";
console.log("String:", name, "Type:", typeof name);

// 2. Number (Primitive)
let age = 30;
console.log("Number:", age, "Type:", typeof age);

// 3. Boolean (Primitive)
let isStudent = false;
console.log("Boolean:", isStudent, "Type:", typeof isStudent);

// 4. Undefined (Primitive)
let unassigned;
console.log("Undefined:", unassigned, "Type:", typeof unassigned);

// 5. Null (Primitive - but typeof returns 'object' due to a JS bug)
let emptyValue = null;
console.log("Null:", emptyValue, "Type:", typeof emptyValue);

// 6. Object (Non-Primitive)
let person = { firstName: "John", lastName: "Doe", age: 30 };
console.log("Object:", person, "Type:", typeof person);

// 7. Array (Non-Primitive, subtype of Object)
let numbers = [1, 2, 3, 4, 5];
console.log("Array:", numbers, "Type:", typeof numbers);

// 8. Function (Non-Primitive, subtype of Object)
function greet() {
    return "Hello, world!";
}
console.log("Function:", greet, "Type:", typeof greet);

// 9. Symbol (Primitive, unique identifier)
let uniqueId = Symbol("id");
console.log("Symbol:", uniqueId, "Type:", typeof uniqueId);

// 10. BigInt (Primitive, for very large numbers)
let bigNumber = BigInt(9007199254740991);
console.log("BigInt:", bigNumber, "Type:", typeof bigNumber);

// Type Checking Function
function checkType(variable) {
    console.log(`Value: ${variable}, Type: ${typeof variable}`);
}

// Testing checkType function
checkType("Hello"); // Primitive
checkType(100); // Primitive
checkType(true); // Primitive
checkType(undefined); // Primitive
checkType(null); // Primitive (but typeof returns 'object')
checkType({ key: "value" }); // Non-Primitive
checkType([1, 2, 3]); // Non-Primitive
checkType(() => {}); // Non-Primitive
checkType(Symbol("test")); // Primitive
checkType(BigInt(12345)); // Primitive
