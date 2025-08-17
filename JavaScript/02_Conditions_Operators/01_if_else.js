// 📌 Conditional Statements in JavaScript (if, else, else if, ternary)

// 1️⃣ If Statement - executes only if condition is true

let age = 15;

// Example 1
if (age >= 18) {
  console.log("✅ You can vote and get a driving license.");
}
if (age < 18) {
  console.log("❌ You cannot vote or get a driving license.");
}

// Example 2
let mode = "dark";
let color;
if (mode === "black") {
  color = "black";
}
if (mode === "light") {
  color = "white";
}
console.log("Selected Color:", color); // output will be undefined

// Example 3 (Incorrect)
if (color === "dark") console.log("dark"); // will not run as color ≠ dark

// 2️⃣ If-Else Statement - choose between two blocks

// Example 1
mode = "light";
if (mode === "dark") {
  color = "black";
} else {
  color = "white";
}
console.log("Theme Color:", color);

// Example 2
if (age >= 18) {
  console.log("✅ You can vote and get a driving license.");
} else {
  console.log("❌ You cannot vote or get a driving license.");
}

// Example 3
let numCheck = 25;
if (numCheck % 2 === 0) {
  console.log(numCheck, "is Even No.");
} else {
  console.log(numCheck, "is Odd No.");
}

// 3️⃣ If-Else If Ladder - multiple conditions

mode = "light";
if (mode === "dark") {
  color = "black";
} else if (mode === "light") {
  color = "white";
} else {
  color = "system";
}
console.log("Final Mode Color:", color);

// 4️⃣ Ternary Operator - short if/else
let result = age > 18 ? "Adult" : "Not Adult";
console.log("Ternary Result:", result);

// or directly
age > 18 ? console.log("Adult") : console.log("Not Adult");

