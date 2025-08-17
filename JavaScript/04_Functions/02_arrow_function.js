// 📌 Arrow Function

// ✅ Arrow function to add two numbers
const add = (a, b) => {
  // Check if inputs are numbers
  if (typeof a !== "number" || typeof b !== "number") {
    return "Invalid input. Please provide two numbers.";
  }

  // Return the sum
  return a + b;
};

// 🔍 Example usage
console.log(add(2, 3)); // Output: 5
console.log(add("2", 3)); // Output: Invalid input. Please provide two numbers.
