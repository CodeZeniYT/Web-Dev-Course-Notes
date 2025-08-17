// ===============================
// 1. Print to console
// ===============================
console.log("Hello World");

// ===============================
// 2. Variable names are case-sensitive
// ===============================
var fullname = "mayank kumar"; // different from FULLNAME
var FULLNAME = "MAYANK KUMAR";
console.log(fullname, FULLNAME); // Output: mayank kumar MAYANK KUMAR

// ===============================
// 3. Allowed identifiers
// ===============================
var _Name = "_name"; // Can start with underscore
var $name = "$name"; // Can start with dollar sign
// var 123name = "123name"; // Not allowed: cannot start with a number

// ===============================
// 4. Variable declarations and data types
// ===============================

// primative data type

// String
var a = "Mayank"; // string

// Number
var b = 7; // number (integer)
var c = 7.5; // number (float)

// Boolean
var isStudent = true; // boolean

// Undefined
var x; // undefined (not assigned)

// Null
var y = null; // null

// Object
var person = { name: "Mayank", age: 14 }; // object

// Array
var arr = [1, 2, 3]; // object (array)
// we can obtain this by indexing i.e. 0 to infinite according to your arry data

// Symbol
var sym = Symbol("id"); // symbol

// BigInt
var bigNum = 1234567890123456789012345678901234567890n; // bigint

// ===============================
// 5. Output all data types
// ===============================
console.log(typeof a); // string
console.log(typeof b); // number
console.log(typeof c); // number
console.log(typeof isStudent); // boolean
console.log(typeof x); // undefined
console.log(typeof y); // object (special case for null)
console.log(typeof person); // object
console.log(typeof arr); // object (arrays are objects)
console.log(typeof sym); // symbol
console.log(typeof bigNum); // bigint

// ===============================
// 6. let variable examples (block-scoped)
// ===============================
let Name = "Mayank";
let age = 14;
let totalPrice = 45000000;

// ===============================

// NOTES:
// - Use 'var', 'let', or 'const' for variable declarations.
// - 'let' and 'const' are block-scoped, 'var' is function-scoped.
// - typeof null returns 'object' (this is a JavaScript quirk).

// ===============================
// 7. const variable examples (block-scoped, cannot be reassigned)
// ===============================

const PI = 3.14159; // Constant value, cannot be changed
const country = "India";
const numbers = [10, 20, 30]; // You can't reassign 'numbers', but you can modify its contents

// Uncommenting the next line will cause an error:
// PI = 3.14; // ❌ Error: Assignment to constant variable

// Modifying array contents is allowed:
numbers.push(40); // Allowed

console.log("PI:", PI);
console.log("country:", country);
console.log("numbers:", numbers);

// =======================================
//  8. Non Primative data type
// ===============================

// Object

const Student = {
  fullName: "Mayank Kumar",
  Age: 14,
  Class: 8,
  isPassed: true,
};
//  we can access them by 2 methods
// 1
console.log(Student.Age);
// 2
console.log(Student["Age"]);
//  CHANGING THE OBJECT KEY'S VALUE
Student.Age = Student.Age - 2;
console.log(Student.Age);
Student.fullName = "Manav Kumar";
console.log(Student.fullName);

// NOTES:
// - Use 'var', 'let', or 'const' for variable declarations.
// - 'let' and 'const' are block-scoped, 'var' is function-scoped.
// - 'const' variables cannot be reassigned, but objects/arrays declared with 'const' can be modified.
// - typeof null returns 'object' (this is a JavaScript quirk).
// - Arrays and objects are both of type 'object'.
// - Arrays and objects are both of type 'object'.
// ==============================================================
// ===============================
// Practice===============================
// ===============================

// Solution No.1

const product = {
  title: "Pen",
  rating: 4,
  peopleRated: 7002,
  price: 270,
  discount: 5,
  isDeal: true,
};
// Solution No.2
const profile = {
  displayName: "Mayank Kumar",
  userName: "Mayank",
  isVerified: true,
  description: "Hi, i am Mayank Kumar.",
  post: 123,
  followers: 123000,
  following: 1,
};
