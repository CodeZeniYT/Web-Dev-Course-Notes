// 📌 Function With Array

// ✅ Arrow function to double each element in an array
const double = (arr) => {
  // Check if input is a valid array of numbers
  if (!Array.isArray(arr) || !arr.every((n) => typeof n === "number")) {
    return "Invalid input. Please provide an array of numbers.";
  }

  // Return new array with each value doubled
  return arr.map((n) => n * 2);
};

// 🔍 Example usage
console.log(double([1, 2, 3])); // Output: [2, 4, 6]
console.log(double(["a", 2, 3])); // Output: Invalid input. Please provide an array of numbers.
