# Theory of Data Types in Node.js

## Introduction
Data types in Node.js (which is based on JavaScript) define the type of data a variable can store and manipulate. Understanding data types is crucial for writing efficient and bug-free programs.

## Categories of Data Types
Node.js data types can be categorized into **Primitive** and **Non-Primitive (Reference) Types**.

### 1. **Primitive Data Types**
Primitive data types are immutable, meaning their values cannot be altered after being assigned. They are stored by value in memory.

#### a) **String**
- Represents textual data.
- Defined using single (`'`), double (`"`), or backticks (`` ` ``) for template literals.
- Example:
  ```js
  let message = "Hello, Node.js!";
  ```

#### b) **Number**
- Represents both integers and floating-point numbers.
- Example:
  ```js
  let count = 42;
  let price = 99.99;
  ```

#### c) **Boolean**
- Represents logical values `true` or `false`.
- Example:
  ```js
  let isLoggedIn = true;
  ```

#### d) **Undefined**
- A variable that has been declared but not assigned a value.
- Example:
  ```js
  let value;
  console.log(value); // Output: undefined
  ```

#### e) **Null**
- Represents an intentional absence of value.
- Example:
  ```js
  let data = null;
  ```

#### f) **Symbol** (ES6 Feature)
- Used to create unique and immutable identifiers.
- Example:
  ```js
  let sym = Symbol("unique");
  ```

### 2. **Non-Primitive (Reference) Data Types**
Non-primitive data types are mutable and stored by reference in memory.

#### a) **Object**
- A collection of key-value pairs.
- Example:
  ```js
  let user = { name: "Alice", age: 25 };
  ```

#### b) **Array**
- A special type of object used to store multiple values.
- Example:
  ```js
  let fruits = ["Apple", "Banana", "Cherry"];
  ```

#### c) **Function**
- A reusable block of code.
- Example:
  ```js
  function greet() {
      return "Hello!";
  }
  ```

## Conclusion
Understanding data types is fundamental in Node.js development. Proper use of data types ensures memory efficiency, performance optimization, and fewer runtime errors.

Happy coding!

