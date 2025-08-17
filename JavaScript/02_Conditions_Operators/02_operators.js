// ✅ JavaScript Operators - Full Guide

// 🔢 Arithmetic Operators
let a = 2;
let b = 5;

console.log("a =", a, "& b =", b);
console.log("a + b =", a + b); // ➕ Addition: 2 + 5 = 7
console.log("a - b =", a - b); // ➖ Subtraction: 2 - 5 = -3
console.log("a * b =", a * b); // ✖️ Multiplication: 2 * 5 = 10
console.log("a / b =", a / b); // ➗ Division: 2 / 5 = 0.4
console.log("b % a =", b % a); // 🧮 Modulus: 5 % 2 = 1
console.log("a ** b =", a ** b); // ⬆️ Exponentiation: 2^5 = 32

// 🔁 Unary Operators
console.log("a++ =", a++); // Post-increment: 2, then a = 3
console.log("++b =", ++b); // Pre-increment: b = 6
console.log("a-- =", a--); // Post-decrement: 3, then a = 2
console.log("--b =", --b); // Pre-decrement: b = 5

// 🏁 Final Values
console.log("Final a =", a); // 2
console.log("Final b =", b); // 5

// 🧾 Assignment Operators
a += 4; // a = 2 + 4 = 6
console.log("a += 4 ➜", a);

a -= 4; // a = 6 - 4 = 2
console.log("a -= 4 ➜", a);

a *= 4; // a = 2 * 4 = 8
console.log("a *= 4 ➜", a);

b /= 10; // b = 5 / 10 = 0.5
console.log("b /= 10 ➜", b);

a %= 6; // a = 8 % 6 = 2
console.log("a %= 6 ➜", a);

a **= 6; // a = 2 ** 6 = 64
console.log("a **= 6 ➜", a);

// 🧠 Comparison Operators
console.log("a == b ➜", a == b); // false (64 == 0.5)
console.log("a != b ➜", a != b); // true
console.log("a === b ➜", a === b); // false (different types too)
console.log("a !== b ➜", a !== b); // true
console.log("a > b ➜", a > b); // true
console.log("a < b ➜", a < b); // false
console.log("a >= b ➜", a >= b); // true
console.log("a <= b ➜", a <= b); // false

// 🔍 Logical Operators
let cond1 = a > b; // true
let cond2 = a < b; // false

console.log("cond1 && cond2 ➜", cond1 && cond2); // false
console.log("cond1 || cond2 ➜", cond1 || cond2); // true
console.log("!(a < b) ➜", !(a < b)); // true

/* 
🧠 Quick Summary Table: Comparison Operators

| Operator | Meaning                  | Example   | Result (a = 64, b = 0.5) |
|----------|--------------------------|-----------|--------------------------|
|   ==     | Equal (value)            | a == b    | false                    |
|   !=     | Not Equal (value)        | a != b    | true                     |
|   ===    | Equal (value + type)     | a === b   | false                    |
|   !==    | Not Equal (value + type) | a !== b   | true                     |
|   >      | Greater than             | a > b     | true                     |
|   <      | Less than                | a < b     | false                    |
|   >=     | Greater than or equal    | a >= b    | true                     |
|   <=     | Less than or equal       | a <= b    | false                    |
*/
