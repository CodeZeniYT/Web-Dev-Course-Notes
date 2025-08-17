// ✅ forEach() Loop in JavaScript

// 📌 The forEach() method executes a provided function once for each array element

// 🔹 Syntax:
// array.forEach(function(element, index, array) {
//   // code to execute
// });

// 🔹 Arrow Function Syntax:
// array.forEach((element, index) => {
//   // code to execute
// });

// 📌 Example 1: Basic forEach()
const fruits = ["apple", "banana", "mango"];

fruits.forEach(function (fruit) {
  console.log(fruit); // prints each fruit
});

// Output:
// apple
// banana
// mango

// 📌 Example 2: Using index
const colors = ["red", "green", "blue"];

colors.forEach(function (color, index) {
  console.log(index + ": " + color);
});

// Output:
// 0: red
// 1: green
// 2: blue

// 📌 Example 3: Arrow function with forEach()
const nums = [1, 2, 3, 4];

nums.forEach((num) => {
  console.log(num * 2); // prints double of each number
});

// Output:
// 2
// 4
// 6
// 8

// ⚠️ Note:
// - forEach() does NOT return anything.
// - It cannot be stopped (no break or return).
// - Use forEach() only when you want to "do something" with each item, not return a new array.
// ─────────────────────────────────────────────
// 📌 1. map()
// The map() method creates a NEW array by applying a function to each element of the original array.

const number = [1, 2, 3, 4, 5];

const squared = number.map(function (num) {
  return num * num;
});

console.log("🔹 Squared using map():", squared); // [1, 4, 9, 16, 25]

// 🔹 Arrow function version
const doubled = number.map((num) => num * 2);
console.log("🔹 Doubled using map():", doubled); // [2, 4, 6, 8, 10]

// ─────────────────────────────────────────────
// 📌 2. filter()
// The filter() method returns a NEW array with elements that pass the condition (true in callback).

const marks = [65, 85, 45, 90, 70];

const passed = marks.filter(function (mark) {
  return mark >= 60;
});

console.log("🔹 Passed marks using filter():", passed); // [65, 85, 90, 70]

// 🔹 Arrow function version
const even = number.filter((num) => num % 2 === 0);
console.log("🔹 Even numbers using filter():", even); // [2, 4]

// ─────────────────────────────────────────────
// 📌 3. reduce()
// The reduce() method returns a SINGLE value by reducing the array using an accumulator.

const total = number.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log("🔹 Sum using reduce():", total); // 15

// 🔹 Arrow function version
const product = number.reduce((acc, val) => acc * val, 1);
console.log("🔹 Product using reduce():", product); // 120

// ⚠️ Notes:
// - map() → transforms array (same length)
// - filter() → selects elements (may reduce length)
// - reduce() → combines all elements into a single value
