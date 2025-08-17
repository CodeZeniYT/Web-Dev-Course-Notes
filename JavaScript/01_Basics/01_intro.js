// ===============================
// 1. Show a welcome alert means pop-up
// ===============================
alert("Hello world"); // Greets the user

// ===============================
// 2. Prompt user for a random number
// ===============================
var a = prompt("Enter a random number:"); // Takes input as string

// ===============================
// 3. Confirm if user wants to keep the number
// ===============================
// Note: confirm() only takes one string argument.
// To show the number, use string concatenation or template literals.
var isTrue = confirm(
  "Are you sure you don't want to change the number '" + a + "' to another?"
);

// ===============================
// 4. Log for testing
// ===============================
console.log("Code is running. This is for testing if the code works.");

// ===============================
// 5. Show result based on confirmation
// ===============================
if (isTrue) {
  alert("You chose: " + a); // Shows the chosen number
} else {
  alert("Please re-do it."); // Asks user to try again
}

// ===============================
// 6. Log the picked number
// ===============================
console.log("You picked: " + a);

// ===============================
// 7. Change document title and background color
// ===============================
document.title = "Customizing with JS"; // Sets the page title
document.body.style.backgroundColor = "green"; // Changes background color

// ===============================
// NOTES:
// - prompt() returns a string. Use parseInt(a) if you need a number.
// - confirm() only takes one string argument.
// - Use comments to explain each step for easy revision.
// ===============================
